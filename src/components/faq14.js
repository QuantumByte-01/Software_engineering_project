import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq14.css'

const FAQ14 = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <div className="faq14faq8 thq-section-padding">
      <div className="faq14-max-width thq-section-max-width">
        <div className="faq14-container10 thq-flex-column">
          <div className="faq14-section-title thq-flex-column">
            <h2 className="faq14-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq14-text30">FAQs</span>
                </Fragment>
              )}
            </h2>
            <p className="faq14-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="faq14-text32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </Fragment>
              )}
            </p>
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="faq14-text26">Contact</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="faq14-list thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq14-trigger1"
              >
                <p className="faq14-faq1-question1 thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq14-text25">
                        How can I access the interactive 3D models?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon10">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon12">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq14-container13">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq14-trigger2"
              >
                <p className="faq14-faq2-question1 thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq14-text33">
                        Can I customize the architectural designs to suit my
                        preferences?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon14">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon16">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq14-container16">
                  <span className="thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq14-trigger3"
              >
                <p className="faq14-faq2-question2 thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq14-text31">
                        Are there professional designers available to assist
                        with the customization process?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon18">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon20">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq14-container19">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq14-trigger4"
              >
                <p className="faq14-faq2-question3 thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq14-text21">
                        What if I encounter technical issues while using the
                        platform?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon22">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon24">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq14-container22">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq14-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq14-trigger5"
              >
                <p className="faq14-faq1-question2 thq-body-large">
                  {props.faq5Question ?? (
                    <Fragment>
                      <span className="faq14-text23">
                        Is there a limit to the number of designs I can create
                        on Crafting Comfort?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq14-icons-container5">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon26">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq14-icon28">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq14-container25">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq14-content1 thq-flex-column">
          <div className="faq14-content2">
            <h2 className="faq14-text18 thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq14-text22">Still have a question?</span>
                </Fragment>
              )}
            </h2>
            <span className="faq14-text19 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="faq14-text27">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="faq14-text24">Email us</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ14.defaultProps = {
  faq4Question: undefined,
  heading2: undefined,
  faq5Question: undefined,
  action2: undefined,
  faq1Question: undefined,
  action1: undefined,
  content2: undefined,
  heading1: undefined,
  faq3Question: undefined,
  content1: undefined,
  faq2Question: undefined,
}

FAQ14.propTypes = {
  faq4Question: PropTypes.element,
  heading2: PropTypes.element,
  faq5Question: PropTypes.element,
  action2: PropTypes.element,
  faq1Question: PropTypes.element,
  action1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  faq3Question: PropTypes.element,
  content1: PropTypes.element,
  faq2Question: PropTypes.element,
}

export default FAQ14
