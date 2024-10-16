// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to CYBER BIND</h1>
          <p>Your gateway to affordable virtual internships and professional freelancing services.</p>
        </div>
      </header>

      {/* Company Overview */}
      <main>
        <section className="overview-section">
          <div className="section-content">
            <h2>Company Overview</h2>
            <p>
              At CYBER BIND, we are committed to bridging the gap between aspiring students and the professional world.
              We offer affordable online virtual internships that equip students with the necessary skills and experiences
              to excel in their chosen fields. Additionally, our freelancing services provide clients with top-notch solutions
              tailored to their business needs, ensuring quality and reliability in every project we undertake.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="vision-mission-section">
          <div className="vision-card">
            <h2>Our Vision</h2>
            <p>
              To empower the next generation of professionals by providing accessible and high-quality virtual internships,
              while delivering exceptional freelancing services that drive business success.
            </p>
          </div>
          <div className="mission-card">
            <h2>Our Mission</h2>
            <p>
              To offer cost-effective virtual internship programs that enhance students' skills and employability,
              and to deliver reliable and innovative freelancing services that meet and exceed our clients' expectations.
            </p>
          </div>
        </section>

        {/* Our Programs Section */}
        <section className="programs-section">
          <div className="section-content">
            <h2>Our Programs</h2>
            <div className="program-cards">
              <div className="program-card">
                <h3>Virtual Internship Program</h3>
                <p>
                  Our Virtual Internship Program is designed to give you real-world experience from the comfort of your home.
                  We start with a 1-week training program to ensure you are well-prepared. After the training, you can choose from the following durations:
                </p>
                <ul className="program-options">
                  <li>1 Month Internship</li>
                  <li>3 Months Internship</li>
                  <li>6 Months Internship</li>
                </ul>
                <p>
                  The fee is ₹100 per month, with 25% paid upfront when you join and 75% paid upon completion of the internship.
                </p>
                <Link to="/internships" className="apply-button" aria-label="Apply for Internship">Apply Now</Link>
              </div>

              <div className="program-card">
                <h3>Freelancing Services</h3>
                <p>
                  Whether you're looking to kickstart your freelancing career or need professional services for your business, 
                  CYBER BIND offers a wide range of tailored freelancing services. Our experts deliver quality results 
                  that cater to your specific needs.
                </p>
                <Link to="/freelancing-services" className="apply-button" aria-label="Apply for Freelancing Service">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* About CYBER BIND */}
        <section className="description-section" style={{ margin: '60px 0' }}>
          <div className="section-content">
            <h2>About CYBER BIND</h2>
            <p>
              CYBER BIND is dedicated to fostering the growth and development of students through our comprehensive
              virtual internship programs. We understand the challenges faced by students in accessing quality
              internship opportunities, which is why we provide affordable and flexible online internships that cater
              to various domains such as Artificial Intelligence, Web Development, UI/UX Design, and more.
            </p>
            <p>
              We are proud to be registered with the Ministry of Micro, Small, and Medium Enterprises (MSME),
              affirming our commitment to supporting students and clients with top-notch services.
            </p>
            <p>
              For our clients, CYBER BIND offers a wide range of freelancing services designed to meet diverse business
              needs. Whether you're looking to develop a cutting-edge website, create engaging video content, or enhance
              your brand's visual identity, our team of skilled professionals is here to help you achieve your goals
              efficiently and effectively.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section className="process-section" style={{ margin: '60px 0' }}>
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-card">
              <h4>1. Consultation</h4>
              <p>We begin by understanding your needs and objectives, whether you're a student seeking an internship or a client requiring freelancing services.</p>
            </div>
            <div className="process-card">
              <h4>2. Matching</h4>
              <p>For internships, we match students with suitable projects based on their skills and interests. For clients, we assign the best professionals to handle your projects efficiently.</p>
            </div>
            <div className="process-card">
              <h4>3. Execution</h4>
              <p>Our team works diligently to execute the tasks, ensuring quality and timely delivery for all projects.</p>
            </div>
            <div className="process-card">
              <h4>4. Feedback & Support</h4>
              <p>We provide continuous support and gather feedback to improve our services and ensure satisfaction.</p>
            </div>
          </div>
        </section>

        {/* Contact Details */}
        <section className="contact-section">
          <div className="section-content">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:contact@cyberbind.com">contact@cyberbind.in</a></p>
            <p>Follow us on:</p>
            <p>
              <a href="https://www.instagram.com/cyber_bind" target="_blank" rel="noopener noreferrer">Instagram</a> | 
              <a href="https://www.linkedin.com/company/cyberbind-company/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
