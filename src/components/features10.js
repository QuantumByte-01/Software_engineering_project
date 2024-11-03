import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-flex-column thq-section-max-width">
        <div className="features10-section-title thq-flex-column">
          <h2 className="thq-heading-2 features10-text1">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features10-text2">
                  Discover the Key Features
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features10-text8">
                    Explore our key features
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features10-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features10-text3">
                    Explore our key features
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features10-text5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features10-text6">
                    Explore our key features
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features10-text7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row"></div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  feature1ImageAlt: 'PlaceholderImage1314',
  sectionTitle: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  feature2Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature2ImageAlt: 'PlaceholderImage1314',
  feature1Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  feature2Description: undefined,
  feature3Title: undefined,
  feature3ImageAlt: 'PlaceholderImage1314',
  feature3Description: undefined,
  feature1Title: undefined,
}

Features10.propTypes = {
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features10
