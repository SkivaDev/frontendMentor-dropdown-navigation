import React from 'react'
import logo from '../../assets/images/logo.svg'
import icon from '../../assets/images/icon-arrow-down.svg'
import icon_todo from '../../assets/images/icon-todo.svg'
import icon_calendar from '../../assets/images/icon-calendar.svg'
import icon_reminders from '../../assets/images/icon-reminders.svg'
import icon_planning from '../../assets/images/icon-planning.svg'
import icon_menu from '../../assets/images/icon-menu.svg'
import './navbar.scss'

function Navbar() {
  return (
    <header className="header">
      <nav className='nav-container'>
        <div className="nav-left">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
            <ul className="nav-links">
              <li>
                Features
                <img className='arrow' src={icon} alt="icon" />
                <div className="sub-menu one">
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
              <li>
                Company
                <img className='arrow' src={icon} alt="icon" />
                <div className="sub-menu two">
                  <p className="sub-link">
                    History
                  </p>
                  <p className="sub-link">
                    Our team
                  </p>
                  <p className="sub-link">
                    Blog
                  </p>
                </div>
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
          <div className="mobile-menu-btn">
            <img src={icon_menu} alt="" />
          </div>
          <div className="mobile-menu">
            <ul className="mobile-links">
              <li>
                <p>
                  Features <img className='arrow' src={icon} alt="icon" />
                </p>
                <div className="mobile-sub one">
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
              <li>
                <p>
                  Company <img className='arrow' src={icon} alt="icon" />
                </p>
                <div className="mobile-sub one">
                  <p className="sub-link">
                    History
                  </p>
                  <p className="sub-link">
                    Our team
                  </p>
                  <p className="sub-link">
                    Blog
                  </p>
                </div>
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
          <div className="nav-right">
            <button className="transparent-btn">Login</button>
            <button className="outlined-btn">Register</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar