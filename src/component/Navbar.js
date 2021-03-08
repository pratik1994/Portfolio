import React, { Component } from "react";
import Logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Portfolio" />
            </Link>
            <button
              type="button"
              className="nav-button"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pratik-mittal-6588b361/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            {/* <li>
                        <a href='https://stackoverflow.com/users/7682818/pratik-mittal' target="_blank">StackOverflow</a>
                    </li>
                    <li>
                        <a href='https://github.com/pratik1994' target="_blank">Github</a>
                    </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
