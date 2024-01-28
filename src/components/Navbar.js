import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkComponent, SocialComponent } from "../utils/links";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <header className="nav-header">
          <Link to='/' className="nav-brand">
          <h3>Cocktail Dreams</h3>
          </Link>
          <div>
            <button className="icon-btn btn nav-toggler">
              <FaBars className="nav-icon"/>
            </button>
          </div>
        </header>
        <LinkComponent classLink='nav-links'/>
        <SocialComponent classSocial='socialTop'/>
      </div>
    </nav>
    )
  };
  
  export default Navbar;
