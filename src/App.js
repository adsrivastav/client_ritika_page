// App.js
import React from 'react';
import './App.css';
import ritikaImage from './assets/ritika.jpg'; // Ensure the image path is correct

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Work with Ritika Thakur</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={ritikaImage} alt="Ritika Thakur" className="hero-image" />
          <h2>WORK WITH RITIKA THAKUR</h2>
          <p>
            Ritika Thakur is offering a platform to work directly with her. Start your own online business, master social skills, and earn a significant income. This opportunity is ideal for young individuals, housewives, and anyone eager to work from home.
          </p>
          <a href="https://surveyheart.com/form/658d10f826e8f13d6708df9a" target="_blank" rel="noopener noreferrer" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Ritika Thakur</h2>
        <p>
          Ritika Thakur is a successful entrepreneur dedicated to empowering others to achieve financial independence through online business opportunities. She has built a dynamic career by mastering the art of digital marketing, social media strategy, and personal branding. Her mission is to provide individuals—whether students, housewives, or professionals—the tools and mentorship they need to thrive in the digital economy. Under Ritika’s guidance, you will learn how to navigate the complexities of online business, build a strong personal brand, and develop the social skills necessary to succeed in today’s competitive world. She is passionate about helping people unlock their full potential and live life on their own terms.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits">
          <div className="benefit-item">
            <h3>Expert Guidance</h3>
            <p>Receive direct mentoring from Ritika Thakur, leveraging her expertise to build your online business successfully.</p>
          </div>
          <div className="benefit-item">
            <h3>Flexible Work Environment</h3>
            <p>Enjoy the freedom to work on your terms, making it perfect for students, housewives, and anyone seeking flexible hours.</p>
          </div>
          <div className="benefit-item">
            <h3>Income Growth</h3>
            <p>Unlock potential income opportunities by mastering online business and social media skills.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>One-on-One Mentoring</h3>
            <p>Get personalized guidance from Ritika to help you build and grow your online business with confidence.</p>
          </div>
          <div className="service-card">
            <h3>Business Development Training</h3>
            <p>Learn the essential skills to develop and scale your business, including market analysis, sales strategies, and brand building.</p>
          </div>
          <div className="service-card">
            <h3>Social Media Skills Enhancement</h3>
            <p>Master social media platforms to expand your reach, engage your audience, and drive business success.</p>
          </div>
          <div className="service-card">
            <h3>Income Generation Strategies</h3>
            <p>Discover various income streams and strategies to monetize your skills and achieve financial independence.</p>
          </div>
          <div className="service-card">
            <h3>Flexible Work Opportunities</h3>
            <p>Work from anywhere with flexible schedules, making it ideal for those who want to balance work with personal life.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
          Interested in working with Ritika Thakur? Fill out the form to get started or contact us directly for more information. We look forward to helping you achieve your goals!
        </p>
        <div className="contact-details">
          <p>Email: <a href="mailto:tritika081@gmail.com">tritika081@gmail.com</a></p>
          <p>Contact Number: +916280329538</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-media">
            <p>Follow Ritika on Instagram:</p>
            <a href="https://www.instagram.com/_ritika_thakur1227" target="_blank" rel="noopener noreferrer">
              @_ritika_thakur1227
            </a>
          </div>
          <div className="footer-contact">
            <p>Email: <a href="mailto:your-email@example.com">tritika081@gmail.com</a></p>
            <p>Contact Number: +916280329538</p>
          </div>
          <p className="footer-note">© 2024 Work with Ritika Thakur. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
