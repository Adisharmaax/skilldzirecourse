import React from "react";
import "./Footer.css"; // Import CSS file for styling
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = () => (
  <footer className="footer">
    <div className="container">
       {/* Top border line */}

      <div className="footer-content">
        {/* Left Section - Company Info */}
        <div className="footer-section">
          <h3 className="footer-heading">My Courses</h3>
          <p>Your trusted platform for quality learning and skill enhancement.</p>
          <p>Contact: support@mycourses.com</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/aditya-sharma-027a59230/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/aditya-sharma-027a59230/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aditya-sharma-027a59230/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'>
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/aditya-sharma-027a59230/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
                <FaTwitter />
            </a>
        </div>
          </div>
        </div>
      </div>
      <hr className="footer-line" /><br></br>

      {/* Copyright Section */}
      <div className="footer-bottom">
        &copy; 2025 My Courses. All rights reserved.
      </div>
      <br></br>
    </div>
  </footer>
);

export default Footer;
