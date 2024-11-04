import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './category-card1.css'

const CategoryCard1 = (props) => {
  return (
    <div className="category-card1-category-card">
      <img
        alt={props.imageAlt}
        src={props.categoryImg}
        className="category-card1-image"
      />
      <span>
        {props.text ?? (
          <Fragment>
            <span className="category-card1-text2">
              <span>Desks</span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

CategoryCard1.defaultProps = {
  text: undefined,
  categoryImg:
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
}

CategoryCard1.propTypes = {
  text: PropTypes.element,
  categoryImg: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default CategoryCard1
