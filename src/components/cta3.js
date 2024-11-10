import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta3.css'

const CTA3 = (props) => {
  return (
    <div
      className={`cta3-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta3-max-width thq-section-max-width">
        <div className="cta3-container2 thq-flex-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta3-placeholder-image thq-img-ratio-16-9"
          />
          <div className="cta3-column">
            <span className="thq-heading-2">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta3-text8">
                    Medium length heading goes here
                  </span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta3-text7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta3-actions">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="cta3-text5">Action1</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="cta3-text6">Action2</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA3.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1637263793512-438e70642f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyMDU2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  action2: undefined,
  image1Alt: 'Image1Alt',
  content2: undefined,
  content1: undefined,
  rootClassName: '',
}

CTA3.propTypes = {
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  content2: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA3
