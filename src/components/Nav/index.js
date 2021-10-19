import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <Link to="/" className="navbar-brand">
          Michael Pinkston
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="navItem active">
              <Link to="/about" className="navLink">
                About Me
              </Link>
            </li>
            <li className="navItem active">
              <Link to="/portfolio" className="navLink">
                Portfolio
              </Link>
            </li>
            <li className="navItem active">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
            <li className="navItem active">
              <Link to="/resume" className="navLink">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
