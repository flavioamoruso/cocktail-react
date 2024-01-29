import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <>
    <Hero>
    <div className="home-hero">
    <div className="home-hero-text">
    <div className="home-hero-title">
    <h2 className="brand-color">COCKTAIL & DREAMS</h2>
    <h5>IL LOCALE PIU' FAMOSO AL MONDO</h5>
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
    </>
    );
  };
  
  export default HomeScreen;
