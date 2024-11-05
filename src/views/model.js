import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ThreeDModelViewer from './threed'; // Ensure this is the correct path to your 3D model viewer component

import './model.css';

const Model = (props) => {
  const [modelUrl, setModelUrl] = useState(`${process.env.PUBLIC_URL}/modern_house1/scene.gltf`); // Default URL

  useEffect(() => {
    const surveyData = JSON.parse(localStorage.getItem('surveyData'));
    if (surveyData && surveyData.modelUrl) {
      console.log("Model URL from surveyData:", surveyData.modelUrl);
      setModelUrl(surveyData.modelUrl);
    }
  }, []);
  
  return (
    <div className="model-container10">
      <Helmet>
        <title>Model - Mobillio Online Store</title>
        <meta property="og:title" content="Model - Mobillio Online Store" />
      </Helmet>
      <Navbar
        text={
          <Fragment>
            <span className="home-text100">
              <span className="home-text101">HOME</span>
              <br className="home-text102"></br>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text103 navbar-link">ABOUT US</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text104 navbar-link">WISHLIST</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text105 navbar-link">CONTACT</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text106">SHOP</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text107">LOOKBOOK</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text108">SPECIAL</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text109">ABOUT</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text110">BLOG</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text111">CONTACT</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text112">Register/Login</span>
          </Fragment>
        }
        imageSrc="/butterfly-200h.jpg"
        logoCenter={
          <Fragment>
            <span className="home-logo-center navbar-logo-title">
              <span className="home-text113">CRAFTING COMFORT</span>
              <br></br>
            </span>
          </Fragment>
        }
        logoCenter1={
          <Fragment>
            <span className="home-text115">MOBILLIO</span>
          </Fragment>
        }
        rootClassName="navbarroot-class-name3"
      ></Navbar>

      <div className="model-hero section-container">
        <div className="model-contents">
          <div className="model-contentstexty">
            <div className="model-title">
              <div className="model-container11">
                <span className="model-text24">PRICING ESTIMATE</span>
              </div>
            </div>
            <div className="model-name">
              <div className="model-question"><span>MODEL NAME:</span></div>
              <div className="model-answer"><span className="model-text26">ABCD</span></div>
            </div>
            <div className="model-description">
              <div className="model-container12"><span className="model-text27">DESCRIPTION:</span></div>
              <div className="model-container13">
                <span className="model-text28">
                  The software system ‘Crafting Comfort’ shall allow a registered user to go through a survey, receive an appropriate 3D model of a house based on their requirements, and interact and customize it to a certain extent. The system will also provide a construction cost estimate, with further customization options available through other contractors.
                </span>
              </div>
            </div>
            <div className="model-nofloors">
              <div className="model-container14"><span className="model-text29">NO OF FLOORS:</span></div>
              <div className="model-container15"><span className="model-text30">1</span></div>
            </div>
            <div className="model-norooms">
              <div className="model-container16"><span>NO OF ROOMS:</span></div>
              <div className="model-container17"><span className="model-text32">1</span></div>
            </div>
            <div className="model-material-select">
              <div className="model-container18"><span className="model-text33">SELECTION OF MATERIALS:</span></div>
              <select className="model-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="model-calculate-price">
              <button type="button" className="model-button button">CALCULATE PRICE</button>
            </div>
            <div className="model-price-estimate">
              <div className="model-container19"><span className="model-text34">ESTIMATED PRICE:</span></div>
              <div className="model-container20"><span className="model-text35">1</span></div>
            </div>
          </div>
          <div className="model-model">
            <ThreeDModelViewer key ={modelUrl} modelUrl={modelUrl} />
          </div>
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
}

export default Model;
