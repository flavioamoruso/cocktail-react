import React from "react";
import { Hero, Card } from "../components";
import { valueCards, teamCards } from "../utils/info";
import image from "../assets/image/about-hero.jpg";
import teamImg from "../assets/image/team-img.jpg";

const AboutScreen = () => {
  return <>
  <Hero img={image}>
  <section className="about-hero">
  <div className="about-text">
  <div className="topline"></div>
  <h3>
  <q>
  Grande è la fortuna di chi possiede un buon cocktail e non si ubriaca con 2
  </q>
  </h3>
  <div className="underline"></div>
  </div>
  </section>
  </Hero>
  <section className="about-value">
  <div className="container about-value-content">
  <h3 className="brand-secondary-color">Gli obiettivi principali</h3>
  <div className="card-section">
  {
    valueCards.map((card) => {
      return (
        <Card key={card.title} {...card} className= {"valueCards"}/>
        );
      })
    }
    </div>
    </div>
    </section>
    <section className="about-team">
    <div className="team-img" 
    style={{
      background: `url(${teamImg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
    ></div>
    <div className="container about-team-content">
    <h3 className="brand-secondary-color">
    Il Nostro Staff
    </h3>
    {
      teamCards.map((card) => {
        return (
          <Card key={card.title} {...card} className= {"valueCards"}/>
          );
        })
      }
      </div>
      </section>
      </>
    };
    
    export default AboutScreen;
