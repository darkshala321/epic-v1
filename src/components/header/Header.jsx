import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="res-menu">
        <img src="src/assets/icons8-menu-30.png" alt="menu" />
      </div>
      <div className="primary-menu">
        <a href="" className="primary-menu-item active">STORE</a>
        <a href="" className="primary-menu-item">NEWS</a>
        <a href="" className="primary-menu-item">FAQ</a>
        <a href="" className="primary-menu-item">HELP</a>
      </div>
      <div className="header-options">
        <i className="fa fa-globe" aria-hidden="true"></i>
        <div className="auth">
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>SIGN IN</span>
        </div>
        <button className="download-btn">
          GET EPIC GAMES
        </button>
      </div>
    </header>
  )
}

export default Header