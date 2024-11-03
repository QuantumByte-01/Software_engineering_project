import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './survey.css'

const Survey = (props) => {
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
            <span className="survey-text25">INSTRUCTIONS</span>
            <span> :</span>
            <br></br>
            <span>Read Each Question Carefully</span>
            <br></br>
            <span>Answer Thoroughly</span>
            <br></br>
            <span>Select All Relevant Options</span>
            <br></br>
            <span>Use the “Other” Option if Needed</span>
            <br></br>
            <span>Submit When Finished</span>
          </span>
        </div>
        <div className="survey-landscape">
          <span>Q. ENTER LANDSCAPE FOR THE HOUSE?</span>
        </div>
        <div className="survey-placeholder">
          <input
            type="text"
            placeholder="placeholder"
            className="survey-textinput input"
          />
        </div>
        <div className="survey-type">
          <span className="survey-text38">
            Q. SELECT WHAT TYPE OF HOUSE YOU PREFER?
          </span>
        </div>
        <div className="survey-housetypes">
          <button type="button" className="survey-button10 button">
            single storey building
          </button>
          <button type="button" className="survey-button11 button">
            two storey building
          </button>
          <button type="button" className="survey-button12 button">
            three storey building 
          </button>
          <button type="button" className="survey-button13 button">
                       duplex
          </button>
          <button type="button" className="survey-button14 button">
                    quadruplex
          </button>
          <button type="button" className="survey-button15 button">
                        triplex
          </button>
          <button type="button" className="survey-button16 button">
                          villa
          </button>
          <button type="button" className="survey-button17 button">
                      bungalow
          </button>
        </div>
        <div className="survey-rooms">
          <div className="survey-container3">
            <span className="survey-text39">
              Q. NO. OF ROOMS FOR  EACH FLOOR
            </span>
          </div>
        </div>
        <div className="survey-choicerooms">
          <div className="survey-container4">
            <button type="button" className="survey-button18 button">
              1
            </button>
            <button type="button" className="survey-button19 button">
              2
            </button>
            <button type="button" className="survey-button20 button">
              3
            </button>
            <button type="button" className="survey-button21 button">
              4
            </button>
          </div>
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
