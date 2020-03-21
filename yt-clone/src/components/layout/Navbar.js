import React from 'react';
import { ReactComponent as Hamburger } from '../../img/svg/hamburgerIcon.svg';
import { ReactComponent as SearchBtn } from '../../img/svg/searchBtn.svg';
import { ReactComponent as YTIcon } from '../../img/svg/navbarYTIcon.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <button className="btn" toggleable="true">
          <Hamburger />
        </button>
        <i className="yt-icon">
          <YTIcon />
        </i>
        <form action="!#" className="search-form">
          <input type="text" placeholder="Search" />
          <button>
            <SearchBtn />
          </button>
        </form>
        <ul>
          <li className="navbar-item">
            <a href="#!">Queue</a>
          </li>
          <li className="navbar-item">
            <a href="#!">History</a>
          </li>
          <li className="navbar-item">
            <a href="#!">About</a>
          </li>
          <li className="navbar-item">
            <a href="#!" className="user-icon">
              H
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
