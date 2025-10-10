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
    <div>
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
          <div className="carousel-item active">
            <img
              src={slide3}
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide1}
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <marquee direction="right">
        <h1 className="neon-hover-dark text-uppercase">
          get your best-freand hear{" "}
        </h1>
      </marquee>
      <section className="container my-5">
        <h2 className="text-center mb-4 neon-hover-dark">
          Welcome to Pet Adoption
        </h2>
        <h4 className="text-center">
          We are dedicated to finding loving homes for animals. Explore our
          collection of adorable pets ready to be adopted. Join our community
          and make a difference in an animal’s life!
        </h4>
      </section>
      <section className="container my-5">
        <h2 className="mb-4 neon-hover-dark text-center">Featured Animals</h2>
        <div className="row">
          {featuredAnimals.map((animal, index) => {
            let aosEffect = "fade-up";
            if (index === 0) aosEffect = "fade-right";
            else if (index === 2) aosEffect = "fade-left";

            return (
              <div
                className="col-md-4 mb-4"
                key={animal.id}
                data-aos={aosEffect}
              >
                <div className="card pastel-card h-100 shadow-sm">
                  <img
                    src={animal.img}
                    className="card-img-top"
                    alt={animal.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title neon-hover-dark">
                      {animal.name}
                    </h5>
                    <p className="card-text">{animal.desc}</p>
                    <Link
                      to="/adopt"
                      className="btn btn-success btn-lg neon-hover-dark"
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
