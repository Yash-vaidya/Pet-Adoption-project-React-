import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <div className="overlay">
        <div className="text-center text-white p-5">
          <h1>We Love Animals</h1>
          <p className="lead">
            At Pet Adoption, we believe every animal deserves a loving home. 
            Join us in making the world a better place for our furry and feathered friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
