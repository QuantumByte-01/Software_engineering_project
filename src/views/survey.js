import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './survey.css';

const Survey = (props) => {
  const [landscape, setLandscape] = useState('');
  const [houseType, setHouseType] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const history = useHistory();

  const handleLandscapeChange = (value) => {
    setLandscape(value);
  };

  const handleHouseTypeChange = (value) => {
    setHouseType(value);
  };

  const handleNumRoomsChange = (value) => {
    setNumRooms(value);
  };

  const handleSubmit = () => {
    // Answers to the questions stored in this survey data variable
    const surveyData = {
      landscape,
      houseType,
      numRooms,
    };

    // Generate the model URL based on user input
    let modelUrl = '/modern_house1/scene.gltf'; // default model

    if (houseType === 'single storey building') {
      modelUrl = '/autumn-house/scene.gltf';
    } else if (houseType === 'duplex') {
      modelUrl = '/a_low_poly_house/scene.gltf';
      
    } // Add more conditions as needed

    surveyData.modelUrl = modelUrl; // Save the model URL in survey data
    localStorage.setItem('surveyData', JSON.stringify(surveyData));

    // Navigate to the model page
    history.push('/model');
  };

  return (
    <div className="survey-container1">
      <Helmet>
        <title>Survey - Mobillio Online Store</title>
        <meta property="og:title" content="Survey - Mobillio Online Store" />
      </Helmet>
      <Navbar
        text={<span className="survey-text10">HOME</span>}
        text1={<span className="survey-text11 navbar-link">ABOUT US</span>}
        text2={<span className="survey-text12 navbar-link">WISHLIST</span>}
        text3={<span className="survey-text13 navbar-link">CONTACT</span>}
        text4={<span className="survey-text14">SHOP</span>}
        text5={<span className="survey-text15">LOOKBOOK</span>}
        text6={<span className="survey-text16">SPECIAL</span>}
        text7={<span className="survey-text17">ABOUT</span>}
        text8={<span className="survey-text18">BLOG</span>}
        text9={<span className="survey-text19">CONTACT</span>}
        button={<span className="survey-text20">Register/Login</span>}
        logoCenter={
          <span className="survey-logo-center navbar-logo-title">
            <span className="survey-text21">CRAFTING COMFORT</span>
            <br></br>
          </span>
        }
        logoCenter1={<span className="survey-text23">MOBILLIO</span>}
        rootClassName="navbarroot-class-name1"
      />
      
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
        text={<span className="survey-text40">4517 Washington Ave. Manchester, Kentucky 39495, United States</span>}
        text1={<span className="survey-text43">584135</span>}
        text2={
          <span className="survey-text44">
            Ph: +91 6363996166
            <br />
            E-mail: info@iiitr.ac.in
          </span>
        }
        text3={<span className="survey-text51">Categories</span>}
        text4={<span className="survey-text52">Bungalow</span>}
        text5={<span className="survey-text53">Wooden villa</span>}
        text6={<span className="survey-text54">Villa</span>}
        text7={<span className="survey-text55">Home</span>}
        text8={<span className="survey-text56">Apartments</span>}
        text9={<span className="survey-text57">Duplex</span>}
        text10={<span className="survey-text58">Company</span>}
        text11={<span className="survey-text59">Shop</span>}
        text12={<span className="survey-text60">Lookbook</span>}
        text13={<span className="survey-text61">Specials</span>}
        text14={<span className="survey-text62">About Us</span>}
        text15={<span className="survey-text63">Blog</span>}
        text16={<span className="survey-text64">Resources</span>}
        text17={<span className="survey-text65">Contact us</span>}
        text18={<span className="survey-text66">Survey</span>}
        text19={<span className="survey-text67">Material pricing</span>}
        text20={
          <Link to="/model" className="survey-navlink">
            View page
          </Link>
        }
        heading={<span className="survey-text68 Heading-3">CONTACT US</span>}
        rootClassName="footerroot-class-name1"
      />
    </div>
  );
};

export default Survey;
