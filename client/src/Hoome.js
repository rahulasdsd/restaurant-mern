import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
     

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing things with us</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Our Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;