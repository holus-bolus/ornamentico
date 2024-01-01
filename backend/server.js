require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(bodyParser.json());

// Mock posts array
let posts = [
  //... your blog posts
];

// Mock users array
let users = [
  //... your users with hashed passwords
];

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

app.get('/api/posts', (req, res) => {
  console.log('Fetching posts:', posts);
  res.json(posts);
});

app.post('/api/posts', authenticateToken, (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }
  const newPost = { id: posts.length + 1, title, content, userId: req.user.id };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.post('/api/login', (req, res) => {
  console.log('Login attempt:', req.body);
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.passwordHash)) {
    const userForToken = { id: user.id, username: user.username };
    const accessToken = jwt.sign(userForToken, SECRET_KEY, {
      expiresIn: '24h',
    });
    res.json({ accessToken });
  } else {
    console.log('Invalid credentials attempt for username:', username);
    res.status(400).send('Invalid credentials');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
