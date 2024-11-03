import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './feedback.css'

const Feedback = (props) => {
  return (
    <div className="feedback-container1">
      <div className="feedback-max-width thq-section-max-width">
        <div className="feedback-form-root thq-section-padding">
          <div className="feedback-form1">
            <div className="feedback-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="feedback-text7">FEEDBACK</span>
                  </Fragment>
                )}
              </h2>
              <div className="feedback-have-an-account-login1"></div>
            </div>
            <form className="feedback-form2">
              <div className="feedback-email">
                <label
                  htmlFor="thq-sign-up-1-email"
                  className="feedback-text2 thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Email address"
                  className="feedback-textinput1 thq-input thq-body-large"
                />
              </div>
              <div className="feedback-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="feedback-text3 thq-body-large"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  placeholder="Username"
                  className="feedback-textinput2 thq-input thq-body-large"
                />
              </div>
              <div className="feedback-password">
                <div className="feedback-textfield">
                  <div className="feedback-container2">
                    <label
                      htmlFor="thq-sign-up-1-password"
                      className="feedback-text4 thq-body-large"
                    >
                      Feedback
                    </label>
                    <div className="feedback-hide-password"></div>
                  </div>
                  <input
                    type="Feedback"
                    id="thq-sign-up-1-password"
                    required="true"
                    placeholder="Feedback"
                    className="feedback-textinput3 thq-input thq-body-large"
                  />
                </div>
              </div>
            </form>
            <div className="feedback-container3"></div>
            <button type="submit" className="feedback-button thq-button-filled">
              <span className="feedback-text5 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="feedback-text6">SUBMIT</span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="feedback-have-an-account-login2"></div>
          </div>
        </div>
        <div className="feedback-container4">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="feedback-sign-up-image thq-img-ratio-4-6"
          />
        </div>
      </div>
    </div>
  )
}

Feedback.defaultProps = {
  action1: undefined,
  image1Alt: 'Sign Up Image',
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1674796867700-732711b5b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyODM5NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Feedback.propTypes = {
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Feedback
