import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text10 thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features4-text19">Features</span>
            </Fragment>
          )}
        </h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <h3 className="features4-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features4-text23">
                        Interactive 3D Models
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features4-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features4-text12">
                        Explore your future home in detail with our interactive
                        3D models.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action5 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features4-text20">View Model</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong className="features4-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features4-text18">
                        Customization Options
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description2 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features4-text17">
                        Tailor every aspect of your home design to suit your
                        preferences and style.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action6 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features4-text16">View Model</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content3 thq-flex-column">
              <div className="features4-section-title3 thq-flex-column">
                <strong className="features4-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features4-text14">
                        Cutting-Edge Technology
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description3 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features4-text15">
                        Experience the latest technology in architectural design
                        for a seamless process.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action7 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features4-text13">View Model</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content4 thq-flex-column">
              <div className="features4-section-title4 thq-flex-column">
                <strong className="features4-title4 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features4-text21">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features4-description4 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features4-text22">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features4-action8 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features4-text11">View Model</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features4.defaultProps = {
  feature4Button: undefined,
  feature1Description: undefined,
  feature4ImageAlt: 'image 4',
  feature3Button: undefined,
  feature3Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1721831143783-534e5aaa6a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyMjE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature2Button: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature3ImageAlt: 'Cutting-Edge Technology Image',
  sectionTitle: undefined,
  feature1Button: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyMjE5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyMjE5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Customization Options Image',
  feature1ImageAlt: 'Interactive 3D Models Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1652517209166-f17a2742a5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDYyMjE5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Description: undefined,
  feature1Title: undefined,
}

Features4.propTypes = {
  feature4Button: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3Button: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2Button: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1Button: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features4
