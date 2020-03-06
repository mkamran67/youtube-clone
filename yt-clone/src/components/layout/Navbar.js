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
        <i className="yt-icon"><YTIcon/></i>
        <form action="!#" className="search-input">
          <input type="text" placeholder="Search" className="search" />
          <button className="searchBtn">
            <SearchBtn />
          </button>
        </form>
        <button className="search-icon-btn"></button>
        <ul>
          <li className="navbar-item">Go Live</li>
          <li className="navbar-item">Apps</li>
          <li className="navbar-item">Notify</li>
          <li className="navbar-item">
            <i>H</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
