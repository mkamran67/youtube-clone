import React from 'react';
import { ReactComponent as Hamburger } from '../../img/svg/hamburgerIcon.svg';
import { ReactComponent as SearchBtn } from '../../img/svg/searchBtn.svg';
import { ReactComponent as YTIcon } from '../../img/svg/navbarYTIcon.svg';
import { connect } from 'react-redux';
import { getVideos } from '../../actions/searchActions';
import PropTypes from 'prop-types';

// you must include as an obj if you're bringing props/functions
const Navbar = ({ getVideos }) => {
  // To store the current text within the search input
  let currentSearchText = '';

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted ${currentSearchText}`);

    // Check if search input is empty
    if (currentSearchText === '') {
      console.log(`Empty search input`);
    } else {
      // Call action to get videos and update state
      getVideos(currentSearchText);
    }
  };

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
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={(e) => (currentSearchText = e.target.value)}
          />
          <button onClick={onSubmit}>
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

Navbar.propTypes = {
  getVideos: PropTypes.func.isRequired,
};

export default connect(null, { getVideos })(Navbar);
