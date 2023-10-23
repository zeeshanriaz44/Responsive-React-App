import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <a href="#a">home</a>
        <a href="#a">about</a>
        <a href="#a">contact</a>
        <a href="#a">info</a>
        <a href="#a">login</a>
      </nav>
    </div>
  );
};

export default Navbar;
