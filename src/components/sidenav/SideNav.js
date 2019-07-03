import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import logo from '../../style/images/iconfinder_Significon-LastFM_330379.png';
const SideNav = () => {
  return (
    <Consumer>
      {value => {
        const { navToggleClicked } = value;
        return (
          <div className={navToggleClicked ? 'side-nav show' : 'side-nav'}>
            <ul className='side-nav-links container'>
              <Link
                data-link='home'
                className='side-nav-link '
                onClick={navToggleClicked}
                to='/'
              >
                Home
              </Link>

              <Link
                data-link='searchMovie'
                className='side-nav-link '
                to='/searchMovie'
                onClick={navToggleClicked}
              >
                Search
              </Link>
              <Link
                data-link='about'
                className='side-nav-link '
                to='/about'
                onClick={navToggleClicked}
              >
                About
              </Link>
              <Link
                data-link='contact'
                className='side-nav-link '
                to='/contact'
                onClick={navToggleClicked}
              >
                Contact
              </Link>
            </ul>
            <div className='side-nav-logo '>
              <img src={logo} alt='' />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default SideNav;
