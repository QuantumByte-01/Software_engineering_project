import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer1 ${props.rootClassName} `}>
      <div className="max-width-container">
        <footer className="footer-footer2">
          <div className="footer-contactus">
            <h3 className="Heading-3">
              {props.heading ?? (
                <Fragment>
                  <span className="footer-text39 Heading-3">CONTACT US</span>
                </Fragment>
              )}
            </h3>
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="footer-text32">
                    <span>
                      4517 Washington Ave. Manchester, Kentucky 39495,
                    </span>
                    <span>United States</span>
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="footer-text44">584135</span>
                </Fragment>
              )}
            </span>
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="footer-text54">
                    <span>Ph: +91 6363996166</span>
                    <br className="footer-text56"></br>
                    <br></br>
                    <span>E-mail: info@iiitr.ac.in</span>
                    <br className="footer-text59"></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer-text38">Categories</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text4 ?? (
                  <Fragment>
                    <span className="footer-text49">Bungalow</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text5 ?? (
                  <Fragment>
                    <span className="footer-text61">Wooden villa</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text6 ?? (
                  <Fragment>
                    <span className="footer-text35">Villa</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text7 ?? (
                  <Fragment>
                    <span className="footer-text52">Home</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text8 ?? (
                  <Fragment>
                    <span className="footer-text37">Apartments</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text9 ?? (
                  <Fragment>
                    <span className="footer-text42">Duplex</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-container2">
              <span>
                {props.text10 ?? (
                  <Fragment>
                    <span className="footer-text47">Company</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text11 ?? (
                  <Fragment>
                    <span className="footer-text43">Shop</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text12 ?? (
                  <Fragment>
                    <span className="footer-text48">Lookbook</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text13 ?? (
                  <Fragment>
                    <span className="footer-text36">Specials</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text14 ?? (
                  <Fragment>
                    <span className="footer-text53">About Us</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text15 ?? (
                  <Fragment>
                    <span className="footer-text41">Blog</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-container3">
              <span>
                {props.text16 ?? (
                  <Fragment>
                    <span className="footer-text51">Resources</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text17 ?? (
                  <Fragment>
                    <span className="footer-text50">Contact us</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text18 ?? (
                  <Fragment>
                    <span className="footer-text40">Survey</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text19 ?? (
                  <Fragment>
                    <span className="footer-text46">Material pricing</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text20 ?? (
                  <Fragment>
                    <Link to="/model">
                      <span className="footer-text45">View page</span>
                    </Link>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text: undefined,
  text6: undefined,
  text13: undefined,
  text8: undefined,
  text3: undefined,
  heading: undefined,
  rootClassName: '',
  text18: undefined,
  text15: undefined,
  text9: undefined,
  text11: undefined,
  text1: undefined,
  text20: undefined,
  text19: undefined,
  text10: undefined,
  text12: undefined,
  text4: undefined,
  text17: undefined,
  text16: undefined,
  text7: undefined,
  text14: undefined,
  text2: undefined,
  text5: undefined,
}

Footer.propTypes = {
  text: PropTypes.element,
  text6: PropTypes.element,
  text13: PropTypes.element,
  text8: PropTypes.element,
  text3: PropTypes.element,
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
  text18: PropTypes.element,
  text15: PropTypes.element,
  text9: PropTypes.element,
  text11: PropTypes.element,
  text1: PropTypes.element,
  text20: PropTypes.element,
  text19: PropTypes.element,
  text10: PropTypes.element,
  text12: PropTypes.element,
  text4: PropTypes.element,
  text17: PropTypes.element,
  text16: PropTypes.element,
  text7: PropTypes.element,
  text14: PropTypes.element,
  text2: PropTypes.element,
  text5: PropTypes.element,
}

export default Footer
