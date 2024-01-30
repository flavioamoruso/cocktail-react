import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  const [input, setInput] = useState('Spritz')
  return (
    <>
    <Hero>
    <div className="home-hero">
    <div className="home-hero-text">
    <div className="home-hero-title">
    <h2 className="brand-color">COCKTAIL & DREAMS</h2>
    <h5>IL DATABASE PIU' FAMOSO AL MONDO</h5>
    </div>
    <p>Cocktail & Dreams è un database che contiene tutti i drink a portata di mano di cui potrai direttamente gustarteli a casa tua seguendo la ricetta passo passo, senza esegerare!</p>
    <Link to='/about' className="btn btn-primary">
    Scopri di più
    </Link>
    </div>
    <div className="home-hero-img">
    <Lottie
    options={{
      loop: true,
      autoplay: true,
      reverse: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }}
    height={350}
    />
    </div>
    </div>
    </Hero>
    <section className="container home-screen">
      <div className="search-bar">
        <div className="form-container">
          <form>
            <label htmlFor="drink">
              <h4>Cerca il tuo cocktail</h4>
            </label>
            <div className="input-search">
              <input
              id="drink"
              className="input"
              placeholder={input}
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              />
              <button className="btn icon-btn" type="submit">
                <FaSearch className="icon"/>
              </button>
            </div>
          </form>
        </div>
        <p className="result">3 risultati</p>
      </div>
    </section>
    </>
    );
  };
  
  export default HomeScreen;
