import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
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
                  <br></br>
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
            <button type="button" className="navbar-button button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="navbar-text31">Register/Login</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-role="BurgerMenu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-container">
              <span className="navbar-logo-center2">
                {props.logoCenter1 ?? (
                  <Fragment>
                    <span className="navbar-text20">MOBILLIO</span>
                  </Fragment>
                )}
              </span>
              <div
                data-role="CloseMobileMenu"
                className="navbar-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navbar-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="navbar-middle2">
              <span>
                {props.text4 ?? (
                  <Fragment>
                    <span className="navbar-text32">SHOP</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text5 ?? (
                  <Fragment>
                    <span className="navbar-text22">LOOKBOOK</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text6 ?? (
                  <Fragment>
                    <span className="navbar-text21">SPECIAL</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text7 ?? (
                  <Fragment>
                    <span className="navbar-text26">ABOUT</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text8 ?? (
                  <Fragment>
                    <span className="navbar-text33">BLOG</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text9 ?? (
                  <Fragment>
                    <span className="navbar-text24">CONTACT</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="navbar-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="navbar-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  logoCenter1: undefined,
  imageAlt: 'image',
  text6: undefined,
  text5: undefined,
  text2: undefined,
  text9: undefined,
  text1: undefined,
  text7: undefined,
  text3: undefined,
  logoCenter: undefined,
  text: undefined,
  rootClassName: '',
  imageSrc: '/butterfly-200h.jpg',
  button: undefined,
  text4: undefined,
  text8: undefined,
}

Navbar.propTypes = {
  logoCenter1: PropTypes.element,
  imageAlt: PropTypes.string,
  text6: PropTypes.element,
  text5: PropTypes.element,
  text2: PropTypes.element,
  text9: PropTypes.element,
  text1: PropTypes.element,
  text7: PropTypes.element,
  text3: PropTypes.element,
  logoCenter: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.element,
  text4: PropTypes.element,
  text8: PropTypes.element,
}

export default Navbar
