import React, { Fragment, useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //if there is an existing login, ensures that every page's navbar mirrors the same
    //uses crededntials of user obtained when they had logged in
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    //obtains credentials of logged in user upon successful login
    setUser(decoded);
    sessionStorage.setItem('user', JSON.stringify(decoded));
    //stores user data upon a successful login
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user'); // Clear user data on logout
  };

  return (
    <div className={`navbar-navbar1 ${props.rootClassName} `}>
      <header data-role="Header" className="navbar-header max-width-container">
        <div className="navbar-navbar2">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image"
          />
          <Link to="/" className="navbar-logo-center1">
            {props.logoCenter ?? (
              <Fragment>
                <span className="navbar-logo-center3 navbar-logo-title">
                  <span className="navbar-text28">CRAFTING COMFORT</span>
                  <br />
                </span>
              </Fragment>
            )}
          </Link>
          <div className="navbar-middle1">
            <div className="navbar-right">
              <Link to="/" className="navbar-navlink">
                {props.text ?? (
                  <Fragment>
                    <span className="navbar-text30">HOME</span>
                  </Fragment>
                )}
              </Link>
              <Link to="/" className="navbar-text10">
                {props.text1 ?? (
                  <Fragment>
                    <span className="navbar-text25 navbar-link">ABOUT US</span>
                  </Fragment>
                )}
              </Link>
              <span className="navbar-text11">
                {props.text2 ?? (
                  <Fragment>
                    <span className="navbar-text23 navbar-link">WISHLIST</span>
                  </Fragment>
                )}
              </span>
              <span className="navbar-text12">
                {props.text3 ?? (
                  <Fragment>
                    <span className="navbar-text27 navbar-link">CONTACT</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="navbar-login">
            {user ? (
              <div>
                <span>Welcome, {user.name || user.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log('Login Failed')}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

Navbar.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/butterfly-200h.jpg',
  rootClassName: '',
};

Navbar.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Navbar;