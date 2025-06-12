import React from 'react';
import Nav from "./Nav";

function Header() {
    return (
      <header className="Header">
        <div className="h_inner">
          <div className="h_lt">
            <h1 className="h_logo">
              <a><p>LOGO</p></a>
            </h1>
          </div>
          <div className="h_rt">
            <Nav/>
          </div>
        </div>
      </header>
    );
  }

export default Header