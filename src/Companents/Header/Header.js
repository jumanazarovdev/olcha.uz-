import React, { Component } from "react";
import "./Header.css"

 class Header extends Component {
  render() {
    return (
      <header className="shadow">
        <div className="container-fluid py-4">
          <img src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png" alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
