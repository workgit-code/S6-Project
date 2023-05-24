import React, { useState, useEffect } from "react";
import { MenuData } from "./MenuData.jsx";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? "NavbarItems sticky" : "NavbarItems"}>
      <div className="menu-icons" onClick={() => setState(!state)}>
        <li className={state ? "fa fa-times medium" : "fa fa-bars medium"}></li>
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
