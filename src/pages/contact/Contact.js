import React from 'react';
import Landing from '../../components/landing/Landing';
import Countdown from '../../components/countdown/Countdown';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  return (
    <React.Fragment>
      <Landing />
      <Countdown />
      <div className='container contact'>
        <h1>Get in touch with us</h1>
        <div className='contact-box '>
          <div className='contact-item1'>
            <div className='add-phone'>
              <div className='address add-phone-inner'>
                <p>address</p>
                <p>1001 Diammond Street, NewYurk</p>
                <p>New Crompton, 05231</p>
              </div>
              <div className='phone add-phone-inner'>
                <p>phone</p>
                <span>
                  <i className='fas fa-mobile-alt' />
                  <p>+91 1234560</p>
                </span>
                <span>
                  <i className='fas fa-mobile-alt' />
                  <p>+91 1114560</p>
                </span>
              </div>
            </div>
            <div className='service-box'>
              <p className='service-head'>Online services</p>
              <div className='service'>
                <span>
                  <i className='fas fa-globe' />
                  <p>www.vueInfo.com</p>
                </span>
                <span>
                  <i className='fas fa-envelope' />
                  <p>helloVuers@fmail.com</p>
                </span>
                <span>
                  <i className='fas fa-fax' />
                  <p>fax@VueWork.com</p>
                </span>
              </div>
            </div>
          </div>
          <div className='contact-item2'>
            <form onSubmit={e => e.preventDefault()}>
              <p className='form-head'>Meet us here</p>
              <div className='social'>
                <span>
                  <i className='fab fa-facebook-f' />
                </span>
                <span>
                  <i className='fab fa-instagram' />
                </span>
                <span>
                  <i className='fab fa-twitter' />
                </span>
              </div>
              <p className='msg'>or, send us a message</p>
              <input type='email' placeholder='email' />
              <textarea placeholder='Your  message' />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
