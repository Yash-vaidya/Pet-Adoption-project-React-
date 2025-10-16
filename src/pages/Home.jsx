import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import slide1 from "../assets/imgs/slide1.png";
import slide2 from "../assets/imgs/slide2.png";
import slide3 from "../assets/imgs/slide3.png";

import bunny from "../assets/imgs/dogg.png";
import kitty from "../assets/imgs/kitty.png";
import bear from "../assets/imgs/bear.png";

import About from "./About";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const featuredAnimals = [
    {
      id: 1,
      name: "Buddy",
      img: bunny,
      desc: "A friendly dog looking for a loving home.",
    },
    {
      id: 2,
      name: "Kitty",
      img: kitty,
      desc: "A cute kitten who loves to cuddle.",
    },
    {
      id: 3,
      name: "Bear",
      img: bear,
      desc: "A gentle bear looking for a caring home.",
    },
  ];

  return (
    <div className="home-container">
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {[slide3, slide2, slide1].map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={img}
                className="d-block w-100 img-fluid"
                alt={`Slide ${index + 1}`}
                style={{ height: "80vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="my-3">
        <marquee direction="right">
          <h2 className="neon-hover-dark text-uppercase text-center px-2">
            Get your best friend here 
          </h2>
        </marquee>
      </div>
      <section className="container my-5 px-3 px-sm-5">
        <h2 className="text-center mb-4 neon-hover-dark">
          Welcome to Pet Adoption
        </h2>
        <h5 className="text-center text-muted fw-normal">
          We are dedicated to finding loving homes for animals. Explore our
          collection of adorable pets ready to be adopted. Join our community
          and make a difference in an animal’s life!
        </h5>
      </section>
      <section className="container my-5">
        <h2 className="text-center mb-4 neon-hover-dark">Featured Animals</h2>

        <div className="row g-4 justify-content-center">
          {featuredAnimals.map((animal, index) => {
            let aosEffect = "fade-up";
            if (index === 0) aosEffect = "fade-right";
            else if (index === 2) aosEffect = "fade-left";

            return (
              <div
                className="col-12 col-sm-6 col-md-4"
                key={animal.id}
                data-aos={aosEffect}
              >
                <div className="card pastel-card h-100 shadow-sm text-center">
                  <img
                    src={animal.img}
                    className="card-img-top img-fluid"
                    alt={animal.name}
                    style={{
                      objectFit: "contain",
                      height: "230px",
                      padding: "1rem",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title neon-hover-dark fw-bold">
                      {animal.name}
                    </h5>
                    <p className="card-text">{animal.desc}</p>
                    <Link
                      to="/adopt"
                      className="btn btn-success btn-lg neon-hover-dark mt-2"
                    >
                      Adopt Me
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
};

export default Home;
