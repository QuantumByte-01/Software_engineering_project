import React, { useState, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './survey.css'

const Survey = (props) => {
  const [landscape, setLandscape] = useState('')
  const [houseType, setHouseType] = useState('')
  const [numRooms, setNumRooms] = useState('')
  const history = useHistory()

  const handleLandscapeChange = (value) => {
    //holds value kept in the landscape question
    setLandscape(value)
  }

  const handleHouseTypeChange = (value) => {
    //holds option selected in house type question
    setHouseType(value)
  }

  const handleNumRoomsChange = (value) => {
    //holds option selected in no. of rooms question
    setNumRooms(value)
  }

  const handleSubmit = () => {
    // Answers to the questions stored in this survey data variable
    const surveyData = {
      landscape,
      houseType,
      numRooms,
    }
    localStorage.setItem('surveyData', JSON.stringify(surveyData))
    //answers stored locally
    // history to the model page
    history.push('/model');
  }

  return (
    <div className="survey-container1">
      <Helmet>
        <title>Survey - Mobillio Online Store</title>
        <meta property="og:title" content="Survey - Mobillio Online Store" />
      </Helmet>
      <Navbar
        text={
          <Fragment>
            <span className="survey-text10">HOME</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="survey-text11 navbar-link">ABOUT US</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="survey-text12 navbar-link">WISHLIST</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="survey-text13 navbar-link">CONTACT</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="survey-text14">SHOP</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="survey-text15">LOOKBOOK</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="survey-text16">SPECIAL</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="survey-text17">ABOUT</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="survey-text18">BLOG</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="survey-text19">CONTACT</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="survey-text20">Register/Login</span>
          </Fragment>
        }
        logoCenter={
          <Fragment>
            <span className="survey-logo-center navbar-logo-title">
              <span className="survey-text21">CRAFTING COMFORT</span>
              <br></br>
            </span>
          </Fragment>
        }
        logoCenter1={
          <Fragment>
            <span className="survey-text23">MOBILLIO</span>
          </Fragment>
        }
        rootClassName="navbarroot-class-name1"
      ></Navbar>
      
      <div className="survey-container2">
        <div className="survey-instructions">
          <span className="survey-text24">
            <span className="survey-text25">INSTRUCTIONS</span>:<br />
            <span>Read Each Question Carefully</span><br />
            <span>Answer Thoroughly</span><br />
            <span>Select All Relevant Options</span><br />
            <span>Use the “Other” Option if Needed</span><br />
            <span>Submit When Finished</span>
          </span>
        </div>

        {/* Landscape Question */}
        <div className="survey-landscape">
          <span>Q. ENTER LANDSCAPE FOR THE HOUSE?</span>
        </div>
        <div className="survey-placeholder">
          <input
            type="text"
            placeholder="Enter landscape"
            className="survey-textinput input"
            value={landscape}
            onChange={(e) => handleLandscapeChange(e.target.value)}
          />
        </div>

        {/* House Type Question */}
        <div className="survey-type">
          <span className="survey-text38">Q. SELECT WHAT TYPE OF HOUSE YOU PREFER?</span>
        </div>
        <div className="survey-housetypes">
          {['single storey building', 'two storey building', 'three storey building', 'duplex', 'quadruplex', 'triplex', 'villa', 'bungalow'].map((type) => (
            <button
              key={type}
              type="button"
              className={`survey-button button ${houseType === type ? 'selected' : ''}`}
              onClick={() => handleHouseTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Number of Rooms Question */}
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text39">Q. NO. OF ROOMS FOR EACH FLOOR</span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                className={`survey-button button ${numRooms === num ? 'selected' : ''}`}
                onClick={() => handleNumRoomsChange(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="survey-submit-container">
          <button type="button" className="survey-submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      <Footer
        text={
          <Fragment>
            <span className="survey-text40">
              <span>4517 Washington Ave. Manchester, Kentucky 39495,</span>
              <span>United States</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="survey-text43">584135</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="survey-text44">
              <span>Ph: +91 6363996166</span>
              <br className="survey-text46"></br>
              <br></br>
              <span>E-mail: info@iiitr.ac.in</span>
              <br className="survey-text49"></br>
              <br></br>
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="survey-text51">Categories</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="survey-text52">Bungalow</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="survey-text53">Wooden villa</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="survey-text54">Villa</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="survey-text55">Home</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="survey-text56">Apartments</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="survey-text57">Duplex</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="survey-text58">Company</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="survey-text59">Shop</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="survey-text60">Lookbook</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="survey-text61">Specials</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="survey-text62">About Us</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="survey-text63">Blog</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="survey-text64">Resources</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="survey-text65">Contact us</span>
          </Fragment>
        }
        text18={
          <Fragment>
            <span className="survey-text66">Survey</span>
          </Fragment>
        }
        text19={
          <Fragment>
            <span className="survey-text67">Material pricing</span>
          </Fragment>
        }
        text20={
          <Fragment>
            <Link to="/model" className="survey-navlink">
              View page
            </Link>
          </Fragment>
        }
        heading={
          <Fragment>
            <span className="survey-text68 Heading-3">CONTACT US</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name1"
      ></Footer>
    </div>
  )
}

export default Survey
