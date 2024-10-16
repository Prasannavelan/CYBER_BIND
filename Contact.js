import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>If you have any questions, feel free to reach out to us via email:</p>
        <p>Email: <a href="mailto:contact@cyberbind.in">contact@cyberbind.in</a></p>
      </div>

      <div className="social-links">
        <h3>Follow Us</h3>
        <p>Stay connected with us on social media:</p>
        <a href="https://www.instagram.com/cyber_bind" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://www.linkedin.com/company/cyberbind-company/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="additional-info">
        
        <p>
          At CyberBind, we are committed to providing top-notch services to meet your needs. Our team is dedicated to ensuring that you receive the best possible experience. Here are a few reasons to choose us:
        </p>
        <div class="features-list">
  <h3>Why Choose Us?</h3>
  <ul>
    <li>
      <strong>Expertise:</strong> Our team consists of professionals with extensive experience in the industry.
    </li>
    <li>
      <strong>Quality Assurance:</strong> We prioritize quality in every project and service we offer.
    </li>
    <li>
      <strong>Customer Support:</strong> Our support team is available to assist you at any time.
    </li>
    <li>
      <strong>Innovative Solutions:</strong> We continually innovate to provide you with the best solutions tailored to your needs.
    </li>
  </ul>
</div>

      </div>

      <div className="additional-info">
        <h3>Our Mission</h3>
        <p>
        To provide comprehensive training and professional services that bridge the gap 
        between education and industry, enabling students to gain practical experience and 
        clients to receive high-quality freelancing solutions.
        </p>
      </div>

      <div className="feedback-section">
        <h3>Your Feedback Matters!</h3>
        <p>
          We would love to hear your thoughts on our services! Your feedback is invaluable in helping us improve and serve you better. Don't hesitate to reach out with your suggestions or comments.
        </p>
      </div>

      <div className="community-engagement">
        <h3>Join Our Community</h3>
        <p>
          Be part of our growing community! Subscribe to our newsletter and follow us on social media to stay updated on our latest news, offers, and insights.
        </p>
      </div>
    </div>
  );
};

export default Contact;
