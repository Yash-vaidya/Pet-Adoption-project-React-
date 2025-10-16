import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        
        <div className="about-container-img">
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className="text-center px-3 px-md-5">
              <h1 className="display-6 display-md-4 fw-bold neon-hover-dark text-light mb-1">
                We Love Animals 🐶
              </h1>
              <h1 className="display-6 display-md-4 fw-bold neon-hover-dark text-light mb-2">
                We Protect Life 🫀
              </h1>
              <p className="lead mt-3 neon-hover-dark text-light px-1 px-sm-3">
                At Pet Adoption, we believe every animal deserves a loving home.
                Join us in making the world a better place for our furry and
                feathered friends.
              </p>
            </div>
          </div>
        </div>
        <div className="container my-5 about-mission">
          <h2 className="text-center neon-hover-dark">Our Mission</h2>
          <p className="text-center neon-hover-dark mx-auto col-12 col-sm-10 col-md-8">
            Our mission is to rescue, care for, and find loving homes for
            animals in need. We aim to educate the community on responsible pet
            ownership and create a safer environment for all animals.
          </p>
        </div>
        <div className="container my-5 about-services">
          <h2 className="text-center mb-4 neon-hover-dark">What We Do</h2>
          <div className="row text-center g-4">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card shadow h-100 service">
                <div className="card-body pastel-yellow">
                  <h2 className="card-title neon-hover-dark fw-bold">
                    Rescue & Care
                  </h2>
                  <p className="card-text">
                    We rescue abandoned, injured, and stray animals and provide
                    them with medical care and shelter.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card shadow h-100 service-card">
                <div className="card-body pastel-orange">
                  <h2 className="card-title neon-hover-dark fw-bold">
                    Adoption Services
                  </h2>
                  <p className="card-text neon-hover">
                    We help match loving families with animals looking for
                    forever homes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card shadow h-100 service-card">
                <div className="card-body pastel-pink">
                  <h2 className="card-title neon-hover-dark fw-bold">
                    Awareness & Education
                  </h2>
                  <p className="card-text neon-hover">
                    We educate the community about responsible pet ownership and
                    animal welfare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 text-center about-cta">
          <h2 className="neon-hover-dark">Join Our Cause</h2>
          <p className="neon-hover-dark mx-auto col-12 col-sm-10 col-md-8">
            Become a volunteer, donate, or adopt a pet. Your support can change
            lives.
          </p>
          <a href="/adopt" className="btn btn-success btn-lg neon-hover-dark">
            Adopt a Pet Now
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
