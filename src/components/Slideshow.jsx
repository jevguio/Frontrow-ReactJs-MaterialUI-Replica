// src/Slideshow.jsx
import React, { useEffect, useState } from 'react';
import './css/Slideshow.css';
import FrontrowIntensified from'../assets/slideshow/FrontrowIntensified.jpg'
import Billboard from'../assets/slideshow/BILLBOARD.jpg'
import Announcements20130203 from'../assets/slideshow/Announcements20130203.jpg'
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [setSlide, setSlideFrist] = useState(true);
  
  useEffect(() => { 
    // Automatically go to the next slide every second
    const interval = setInterval(() => {
      showDivs(slideIndex + 1);
    }, 3000);
    if(setSlide){
      setSlideFrist(false);
      const interval2 = setTimeout(() => {
        showDivs(slideIndex + 1);
      }, 100);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slideIndex]);

  const plusDivs = (n) => {
    showDivs(slideIndex + n);
  };

  const currentDiv = (n) => {
    showDivs(n);
  };

  const showDivs = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('demo');
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' w3-white', '');
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = 'block';
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += ' w3-white';
    }
  }; 
  return (
    <div style={{paddingTop:'6%'}}> 
      <div className="w3-content w3-display-container" style={{ maxWidth: '100%' }}>
        <img className="mySlides w3-animate-right" src={"./"+FrontrowIntensified} style={{ width: '100%' }} alt="Nature" />
        <img className="mySlides w3-animate-right" src={"./"+Billboard} style={{ width: '100%' }} alt="Snow" />
        <img className="mySlides w3-animate-left" src={"./"+Announcements20130203} style={{ width: '100%' }} alt="Mountains" />
        <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{ width: '100%' }}>
          <div className="w3-left w3-hover-text-khaki" onClick={() => plusDivs(-1)}>&#10094;</div>
          <div className="w3-right w3-hover-text-khaki" onClick={() => plusDivs(1)}>&#10095;</div>
          <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => currentDiv(1)}></span>
          <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => currentDiv(2)}></span>
          <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => currentDiv(3)}></span>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
