import React, { useState } from "react";
import { MenuData } from "./MenuData.jsx";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  return (
    <nav className="NavbarItems">
      <div className="menu-icons" onClick={() => setState(!state)}>
        <li className={state ? "fa fa-times" : "fa fa-bars"}></li>
      </div>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <li>{item.title}</li>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
