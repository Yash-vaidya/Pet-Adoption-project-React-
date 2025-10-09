import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-container-img">
          {/* Hero Section */}
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className="text-center text-white ">
              <h1 className="display-4 fw-bold">We Love Animals </h1>
              <p className="lead mt-3">
                At Pet Adoption, we believe every animal deserves a loving home.
                Join us in making the world a better place for our furry and
                feathered friends.
              </p>
              
            </div>
          </div>
        </div>
        {/* Mission Section */}
        <div className="container my-5 about-mission">
          <h2 className="text-center">Our Mission</h2>
          <p className="text-center">
            Our mission is to rescue, care for, and find loving homes for
            animals in need. We aim to educate the community on responsible pet
            ownership and create a safer environment for all animals.
          </p>
        </div>

        {/* Services Section */}
        <div className="container my-5 about-services">
          <h2 className="text-center mb-4">What We Do</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow h-100 service-card">
                <div className="card-body">
                  <h5 className="card-title"> Rescue & Care</h5>
                  <p className="card-text">
                    We rescue abandoned, injured, and stray animals and provide
                    them with medical care and shelter.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow h-100 service-card">
                <div className="card-body">
                  <h5 className="card-title"> Adoption Services</h5>
                  <p className="card-text">
                    We help match loving families with animals looking for
                    forever homes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow h-100 service-card">
                <div className="card-body">
                  <h5 className="card-title"> Awareness & Education</h5>
                  <p className="card-text">
                    We educate the community about responsible pet ownership and
                    animal welfare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container my-5 text-center about-cta">
          <h2>Join Our Cause</h2>
          <p>
            Become a volunteer, donate, or adopt a pet. Your support can change
            lives.
          </p>
          <a href="/adopt" className="btn btn-success btn-lg">
            Adopt a Pet Now
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
