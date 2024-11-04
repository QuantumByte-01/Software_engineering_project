import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta22.css'

const CTA22 = (props) => {
  return (
    <div className="cta22-container1 thq-section-padding">
      <div className="cta22-max-width thq-section-max-width">
        <div className="cta22-row1">
          <div className="cta22-content">
            <h2 className="cta22-heading1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta22-text6">
                    Ready to transform your living space?
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="cta22-content1 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta22-text3">
                    Start designing your dream home today with Crafting Comfort
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta22-container2">
              <div className="cta22-row2 thq-flex-column">
                <div className="cta22-container3">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.action1 ?? (
                        <Fragment>
                          <span className="cta22-text5">Get Started</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.action2 ?? (
                        <Fragment>
                          <span className="cta22-text4">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="cta22-image thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

CTA22.defaultProps = {
  content1: undefined,
  image1Alt: 'Crafting Comfort CTA',
  action2: undefined,
  action1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1723829285168-f7bb80cc8881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyMDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
}

CTA22.propTypes = {
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default CTA22
