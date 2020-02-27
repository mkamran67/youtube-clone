import React from 'react';
import { ReactComponent as Hamburger } from '../../img/svg/hamburgerIcon.svg';
import { ReactComponent as SearchBtn } from '../../img/svg/searchBtn.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <button className="btn" toggleable="true">
          <Hamburger />
        </button>
        <h3>YT-Clone</h3>
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
          <li className="navbar-item">User</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
