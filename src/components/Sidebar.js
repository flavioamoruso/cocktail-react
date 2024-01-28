import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const {isSidebarOpen,closeSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-content">
        <header className="container nav-header">
          <div className="nav-brand">
            <h3>Dream with us</h3>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
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
