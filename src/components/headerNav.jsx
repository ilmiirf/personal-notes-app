import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";
import ToggleTheme from "../contexts/toggleTheme";

const HeaderNav = ({ logout, name }) => {
  return (
    <>
      <h1>NotesApp</h1>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="linkText"
            >
              NotesApp
            </Link>
          </li>
          <li>
            <Link
              to="/archived"
              style={{ textDecoration: "none" }}
              className="linkText"
            >
              Archive
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <ToggleTheme />
          </li>
          <li>
            <button onClick={logout} className="logoutBtn">
              {name} <FiLogOut />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

HeaderNav.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeaderNav;
