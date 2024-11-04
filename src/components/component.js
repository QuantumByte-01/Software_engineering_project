import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container1 max-width-container">
      <div className="component-container2">
        <span className="component-text10">
          {props.text ?? (
            <Fragment>
              <span className="component-text12">
                <br className="component-text13"></br>
                <span className="component-text14">
                  Welcome to Crafting Comfort, where architecture meets
                  innovation! We are a passionate team of designers, developers,
                  and architects dedicated to transforming the way you
                  experience home design. With our state-of-the-art, 3D
                  interactive website, we empower you to visualize and customize
                  your dream home, ensuring it is not only functional but also a
                  true reflection of your style and comfort.
                </span>
                <br className="component-text15"></br>
                <br className="component-text16"></br>
                <span className="component-text17">
                                                                               
                   
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="Heading-3">Who We Are</span>
                <br className="component-text19"></br>
                <br className="component-text20"></br>
                <span className="component-text21">
                  At Crafting Comfort, we believe that home is more than just a
                  space—it’s a sanctuary where every detail should resonate with
                  who you are. Founded by a team of architecture and technology
                  enthusiasts, we bridge the gap between modern design and
                  customer personalization. Our mission is to make home design
                  easy, fun, and accessible, allowing you to take charge of
                  every aspect of your home’s layout and aesthetic.
                </span>
                <br className="component-text22"></br>
                <br className="component-text23"></br>
                <span className="component-text24">
                                                                               
                   
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="component-text25">What We Do</span>
                <br className="component-text26"></br>
                <br className="component-text27"></br>
                <span className="component-text28">
                  Our platform gives you the power to explore and customize
                  architectural designs in real-time. Whether you want to tweak
                  the layout, experiment with materials, or choose colors that
                  match your personality, our interactive tools make it
                  possible. We offer a wide range of design templates to inspire
                  you, or you can start from scratch and build your home exactly
                  the way you want.
                </span>
                <br className="component-text29"></br>
                <br className="component-text30"></br>
                <span className="component-text31">
                                                                             
                </span>
                <span className="component-text32"> </span>
                <span className="component-text33">Why Choose Us</span>
                <br className="component-text34"></br>
                <br className="component-text35"></br>
                <span className="component-text36">
                  Interactive 3D Models: Visualize every aspect of your home
                  before it’s built with our user-friendly, immersive 3D
                  interface.
                </span>
                <br className="component-text37"></br>
                <span className="component-text38">
                  Customization at Its Best: Choose everything from flooring to
                  fixtures with a few clicks, making it easier to tailor your
                  home to your taste.
                </span>
                <br className="component-text39"></br>
                <span className="component-text40">
                  Collaborative Approach: Work closely with our team of experts
                  who are always ready to guide you through the design process.
                </span>
                <br className="component-text41"></br>
                <span className="component-text42">
                  Cutting-Edge Technology: Using the latest in 3D modeling and
                  web technologies, we provide an innovative platform to make
                  your dream home a reality.
                </span>
                <br className="component-text43"></br>
                <br className="component-text44"></br>
                <span className="component-text45">
                                                                               
                     
                </span>
                <span className="component-text46">   </span>
                <span className="component-text47">  </span>
                <span className="component-text48">Our Vision</span>
                <br className="component-text49"></br>
                <br className="component-text50"></br>
                <span className="component-text51">
                  We aim to revolutionize the home design process by putting the
                  power in your hands. Our vision is to create a seamless,
                  interactive experience where creativity knows no bounds. With
                  Crafting Comfort, you don’t just build a house—you craft a
                  home that suits your lifestyle, your preferences, and your
                  comfort.
                </span>
              </span>
            </Fragment>
          )}
        </span>
        <Link to="/survey" className="component-navlink button">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="component-text52">TAKE THE SURVEY</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: undefined,
  button: undefined,
}

AppComponent.propTypes = {
  text: PropTypes.element,
  button: PropTypes.element,
}

export default AppComponent
