import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <button className="home-button">Home</button>
      <div className="left-buttons">
        <button>About</button>
        <button>Projects</button>
        <button>Posts</button>
      </div>
      <h1 className="name">Declan Doolin
      </h1>
    </div>
  );
};

export default HomePage;