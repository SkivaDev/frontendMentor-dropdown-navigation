import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import icon from "../../assets/images/icon-arrow-down.svg";
import icon_todo from "../../assets/images/icon-todo.svg";
import icon_calendar from "../../assets/images/icon-calendar.svg";
import icon_reminders from "../../assets/images/icon-reminders.svg";
import icon_planning from "../../assets/images/icon-planning.svg";
import icon_menu from "../../assets/images/icon-menu.svg";
import icon_close from "../../assets/images/icon-close-menu.svg";
import "./navbar.scss";

function Navbar({isActive, handleClick}) {

  const [isLinkActive, setIsLinkActive] = useState(false);

  const handleLinkActive = () => {
    setIsLinkActive(!isLinkActive);
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav-links">
            <li className={isLinkActive ? 'active' : null} onClick={handleLinkActive}>
              Features
              <img className="arrow" src={icon} alt="icon" />
              <div className={`sub-menu one ${isLinkActive ? 'active-menu' : null}`}>
                <p className="sub-link">
                  <img src={icon_todo} alt="icon-todo" />
                  Todo List
                </p>
                <p className="sub-link">
                  <img src={icon_calendar} alt="icon_calendar" />
                  Calendar
                </p>
                <p className="sub-link">
                  <img src={icon_reminders} alt="icon_reminders" />
                  Reminders
                </p>
                <p className="sub-link">
                  <img src={icon_planning} alt="icon_planning" />
                  Planning
                </p>
              </div>
            </li>
            <li className={isLinkActive ? 'active' : null} onClick={handleLinkActive}>
              Company
              <img className="arrow" src={icon} alt="icon" />
              <div className={`sub-menu two ${isLinkActive ? 'active-menu' : null}`}>
                <p className="sub-link">History</p>
                <p className="sub-link">Our team</p>
                <p className="sub-link">Blog</p>
              </div>
            </li>
            <li onClick={handleLinkActive}>Careers</li>
            <li onClick={handleLinkActive}>About</li>
          </ul>
        </div>
        <div className={`mobile-menu-btn ${isActive ? 'active-btn' : null}`} onClick={handleClick}>
          <img src={isActive ? icon_close : icon_menu} alt="" />
        </div>
        <div className={`mobile-menu ${isActive ? 'active-menu': null}`}>
          <ul className="mobile-links">
            <li className={isLinkActive ? 'active' : null}  onClick={handleLinkActive}>
              <p>
                Features <img className="arrow" src={icon} alt="icon" />
              </p>
              <div className={`mobile-sub one ${isLinkActive ? 'active-menu' : null}`}>
                <p className="sub-link">
                  <img src={icon_todo} alt="icon-todo" />
                  Todo List
                </p>
                <p className="sub-link">
                  <img src={icon_calendar} alt="icon_calendar" />
                  Calendar
                </p>
                <p className="sub-link">
                  <img src={icon_reminders} alt="icon_reminders" />
                  Reminders
                </p>
                <p className="sub-link">
                  <img src={icon_planning} alt="icon_planning" />
                  Planning
                </p>
              </div>
            </li>
            <li className={isLinkActive ? 'active' : null} onClick={handleLinkActive}>
              <p>
                Company <img className="arrow" src={icon} alt="icon" />
              </p>
              <div className={`mobile-sub two ${isLinkActive ? 'active-menu' : null}`}>
                <p className="sub-link">History</p>
                <p className="sub-link">Our team</p>
                <p className="sub-link">Blog</p>
              </div>
            </li>
            <li className={isLinkActive ? 'active' : null} onClick={handleLinkActive}>Careers</li>
            <li className={isLinkActive ? 'active' : null}  onClick={handleLinkActive}>About</li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="transparent-btn">Login</button>
          <button className="outlined-btn">Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
