import Footer from '../Footer/Footer.jsx';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-3 heading">Our Contacts</h2>
      <p className="lead">How you can contact us</p>

      <div className="row">
        <div className="col-md-6">
          <div className="custom-card-bg">
            <div className="card p-4 my-3">
              <h3 className="card-title">Ornamentico Group Company</h3>
              <address className="card-text">
                Koprivnik v Bohinju 5,
                <br />
                Bohinjska Bistrica,
                <br />
                4264, Slovenia
                <br />
                <a href="mailto:hello@ornamentico.com" className="card-NavLink">
                  hello🐶ornamentico.com
                </a>
              </address>
            </div>
          </div>

          <a href="https://goo.gl/maps/8DtJQ6ZXCas" className="d-block mb-3">
            How to reach us
          </a>

          <div className="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.255226431165!2d13.981450476742989!3d46.304768476963154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a929aa9d34815%3A0xc92767cbe8983fe2!2sKoprivnik%20v%20Bohinju%205%2C%204264%20Bohinjska%20Bistrica%2C%20Slovenia!5e0!3m2!1sen!2sua!4v1704176323152!5m2!1sen!2sua"
              className="embed-responsive-item"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p>
            How to get there: it's easy to get to us. After turning off the road
            at the Bled sign, you need to drive through the town of Bled and
            continue on road 209 towards Lake Bohinj. In the village of Bitnje,
            turn right at the Pokljuka / Srednja Vas / Jereka sign. Further 2 km
            along the road 633 (light serpentine) to the village of Jereka, in
            which turn right again at the sign Poklujka / Koprivnik / Jereka.
          </p>
          <p>
            Further along the road 905 you need to drive 6 km of real mountain
            serpentine, and you come to us! Our apartments hotel Villa Manja is
            the first house at the entrance to the village of Koprivnik.
          </p>
          <p>
            If you use Google Maps or MapsMe, just type Villa Manja Slovenia in
            the search bar and the app will easily guide you to our cozy
            apartments hotel.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
