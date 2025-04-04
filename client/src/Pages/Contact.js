// Contact.js
import ContactImg from '../assets/contactus.jpg'
import './Contact.css'
function Contact() {
  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '600px', // Limits maximum size for larger screens
  };
    return (
      <div>
        <h1>Contact Us</h1>
        <div  style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
              <img src={ContactImg}
              alt="Responsive Example"
              style={imageStyle}
               />
              </div>
        
        <div className='contact-details'>
          <h2>Titan Hotel</h2>
          <h4>Email : Titan12345@gmail.com</h4>
          <h4>Phone no : 9977883344</h4>
        </div>
      </div>
    );
  }
  export default Contact;