import React from 'react'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';



function Footer() {
  return (
   <>
      <footer className="footer">
      <div className="footer-column">
        <h3>About</h3>
        <ul>
          <li><a href="/contact_us">Contact us</a></li>
          <li><a href="about_us">About us</a></li>
          <li><a href="corporate_info">Corporate Information</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Help</h3>
        <ul>
          <li>Payment</li>
          <li>Shipping & Cancellations</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Social</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/mr._._shivam/" target="_blank" rel="noopener noreferrer">
           <Instagram/>  Instagram
          </a>
          <a href="https://www.linkedin.com/in/shivam-mandal-664a71253/" target="_blank" rel="noopener noreferrer">
            <Linkedin/>  LinkedIn
          </a>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="footer-column">
        <h3>Mail Us</h3>
         <Mail/><a href="http://www.mail.com">anupmandal5454@gmail.com</a>
        <h3>Registered Office Address</h3>
        <p>Gamharia,Jamshedpur</p><br/>
        <p>Pincode:832108</p>

      </div>

      <div className="copyright">
        <p>&copy; 2024 ShivamMart. All Rights Reserved.</p>
      </div>
    </footer>

   </>
  )
}

export default Footer
