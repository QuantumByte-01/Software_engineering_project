import React from 'react'

import PropTypes from 'prop-types'

import './section-heading.css'

const SectionHeading = (props) => {
  return (
    <div className={`section-heading-section-heading ${props.rootClassName} `}>
      <h1 className="section-heading-text">{props.heading}</h1>
    </div>
  )
}

SectionHeading.defaultProps = {
  heading: 'TRENDING ITEMS',
  rootClassName: '',
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading
