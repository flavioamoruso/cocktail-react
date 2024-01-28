import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
const Sidebar = () => {
  return (
    <aside className="sidebar show-sidebar">
      <div className="sidebar-content">
        <header className="container nav-header">
          <div className="nav-brand">
            <h3>Dream with us</h3>
          </div>
          <button className="nav-toggler btn icon-btn">
            <VscArrowSmallLeft className="nav-icon"/>
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink='sidebar-links'/>
        </div>
        <SocialComponent classSocial='sidebar-social'/>
      </div>
    </aside>
  )
};

export default Sidebar;
