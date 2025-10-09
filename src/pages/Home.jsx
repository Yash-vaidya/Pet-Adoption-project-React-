import React from "react";
import { Link } from "react-router-dom";
import kitty from "../assets/imgs/kitty.png";
import bunny from "../assets/imgs/dogg.png";
import bear from "../assets/imgs/bear.png";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.alphacoders.com/774/774079.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "90vh " }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wall.alphacoders.com/big.php?i=1350355"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://placebear.com/900/300"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <section className="container my-5">
        <h2 className="text-center mb-4">Welcome to Pet Adoption</h2>
        <p className="text-center">
          We are dedicated to finding loving homes for animals. Explore our
          collection of adorable pets ready to be adopted. Join our community
          and make a difference in an animal’s life!
        </p>
      </section>
      <section className="container my-5">
        <h2 className="mb-4">Featured Animals</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={bunny} className="card-img-top" alt="Dog" />
              <div className="card-body">
                <h5 className="card-title">Buddy</h5>
                <p className="card-text">
                  A friendly dog looking for a loving home.
                </p>
                <Link to="/adopt" className="btn btn-primary">
                  Adopt Me
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={kitty} className="card-img-top" alt="Cat" />
              <div className="card-body">
                <h5 className="card-title">Kitty</h5>
                <p className="card-text">A cute kitten who loves to cuddle.</p>
                <Link to="/adopt" className="btn btn-primary">
                  Adopt Me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={bear} className="card-img-top" alt="Bear" />
              <div className="card-body">
                <h5 className="card-title">Bear</h5>
                <p className="card-text">
                  A gentle bear looking for a caring home.
                </p>
                <Link to="/adopt" className="btn btn-primary">
                  Adopt Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
