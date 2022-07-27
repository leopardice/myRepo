import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link className="link" to="/">
        Main
      </Link>
      <Link className="link" to="/help">
        Help
      </Link>
    </nav>
  );
}

export default NavBar;
