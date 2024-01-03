require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { Pool } = require('pg'); // PostgreSQL client
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const uploadDir = path.join(__dirname, 'uploads');

// Check if the uploads directory exists, and create it if it doesn't
if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = './db.json';
const SECRET_KEY = process.env.SECRET_KEY;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this env variable is set
  ssl: {
    rejectUnauthorized: false, // This should be true in production for secure connections
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

function readDB() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Middleware to check for a JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    // Construct the image URL
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ imageUrl });
  } else {
    res.status(400).send('No image file provided.');
  }
});


app.use('/uploads', express.static('uploads'));

app.post('/api/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const db = readDB();

    // Check if the user already exists
    const existingUser = db.users.find(
      (u) => u.username === username || u.email === email,
    );
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const passwordHash = bcrypt.hashSync(password, 10);

    // Create a new user
    const newUser = {
      id: db.users.length + 1,
      username,
      password_hash: passwordHash,
      email,
    };
    db.users.push(newUser);
    writeDB(db);

    res
      .status(201)
      .json({ message: 'User created successfully', userId: newUser.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

app.get('/api/posts', (req, res) => {
  try {
    const db = readDB();
    res.json(db.posts);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.get('/api/posts/:postId', (req, res) => {
  const { postId } = req.params;

  try {
    const db = readDB();
    const post = db.posts.find((p) => p.id === parseInt(postId));
    if (!post) {
      return res.status(404).send('Post not found');
    }

    // Filter comments for this post
    const postComments = db.comments ? db.comments.filter(comment => comment.postId === parseInt(postId)) : [];


    // Include comments in the response
    res.json({...post, comments: postComments});
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});


app.post('/api/posts', authenticateToken, (req, res) => {
  const { title, content, imageUrl } = req.body; // Include imageUrl in the destructured fields
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }

  try {
    const db = readDB();
    const newPost = {
      id: db.posts.length + 1,
      title,
      content,
      imageUrl, // Add imageUrl to the new post object
      userId: req.user.id,
      createdAt: new Date().toISOString(),
    };
    db.posts.push(newPost);
    writeDB(db);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username, password });

  try {
    const db = readDB();
    const user = db.users.find((u) => u.username === username);

    if (!user) {
      return res.status(400).send('User not found');
    }

    if (bcrypt.compareSync(password, user.password_hash)) {
      const userForToken = { id: user.id, username: user.username };
      const accessToken = jwt.sign(userForToken, SECRET_KEY, {
        expiresIn: '24h',
      });
      res.json({ accessToken });
    } else {
      res.status(400).send('Invalid password');
    }
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).send('Server error');
  }
});

app.post('/api/posts/:postId/comments', (req, res) => {
  const { postId } = req.params;
  const { content } = req.body; // assuming a 'content' field for the comment text

  const db = readDB();
  const post = db.posts.find(p => p.id === parseInt(postId));
  if (!post) {
    return res.status(404).send('Post not found');
  }

  const newComment = {
    id: db.comments.length + 1,
    postId: parseInt(postId),
    content,
    createdAt: new Date().toISOString()
  };

  db.comments.push(newComment);
  writeDB(db);
  res.status(201).json(newComment);
});


app.delete('/api/comments/:commentId', authenticateToken, (req, res) => {
  const { commentId } = req.params;

  const db = readDB();
  const commentIndex = db.comments.findIndex(c => c.id === parseInt(commentId));
  if (commentIndex === -1) {
    return res.status(404).send('Comment not found');
  }

  // Optional: Check if the logged-in user is the author of the comment
  // if (req.user.id !== db.comments[commentIndex].userId) {
  //   return res.status(403).send('Unauthorized');
  // }

  db.comments.splice(commentIndex, 1);
  writeDB(db);
  res.status(204).send();
});


app.use('*', (req, res) => {
  res.status(404).send('API route not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
