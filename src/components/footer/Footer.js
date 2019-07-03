import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-brand'>
            <p>mixtape</p>
          </div>
          <div className='footer-social'>
            <span>
              <i className='fab fa-facebook-f' />
            </span>
            <span>
              <i className='fab fa-instagram' />
            </span>
            <span>
              <i className='fab fa-twitter' />
            </span>
            <span>
              <i className='fab fa-youtube' />
            </span>
            <span>
              <i className='fab fa-lastfm' />
            </span>
          </div>
        </div>
      </div>
      <div className='footer-credit'>
        <p>
          <small>&copy; acid@fmail.com</small>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
