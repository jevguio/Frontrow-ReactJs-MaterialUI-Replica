import React from 'react';

import logo from '../assets/Frontrow_logo.png';
const Footer = () => {
  return (
    <footer className="text-center text-lg-start mt-xl-5 pt-4">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <a href="/home"><img src={"./"+logo} className="logo" /></a>
            <ul className="list-unstyled mb-4">
              <li>
                <a href="#!" className="text-white center">Copyright © 2024 All rights reserved | 2018 Frontrow International</a> 
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Assistance</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">Terms & Condition</a>
              </li>
              <li>
                <a href="#!" className="text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#!" className="text-white">Ethical Standard & Policy</a>
              </li> 
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Menu</h5>
            <ul className="list-unstyled">
                
              <li>
                <a href="./CONTACTS" className="text-white">Contacts</a>
              </li>
              <li>
                <a href="./ABOUT" className="text-white">About</a>
              </li>
              <li>
                <a href="./home" className="text-white">Feed Back</a>
              </li>
              <li>
                <a href="./Shop" className="text-white">Shop</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
              <label className="form-label" htmlFor="form5Example2">Email address</label>
            </div>
            <button type="submit" className="  Subscribe">Subscribe</button>
          </div>
        </div>
      </div> 
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="icon" >
        <i className="bi bi-facebook"></i>
      </button>
      <button type="button" className="icon"  >
        <i className="bi bi-youtube"></i>
      </button>
      <button type="button" className="icon"  >
        <i className="bi bi-instagram"></i>
      </button>
      <button type="button" className="icon" >
        <i className="bi bi-twitter"></i>
      </button>
    </div>
    </footer>
  );
};

export default Footer;
