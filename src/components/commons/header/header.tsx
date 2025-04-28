import React from "react";
import "./Header.scss";

const AppHeader: React.FC = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__items">
        <li className="header__items-content">
          <a href="#">Home</a>
        </li>
        <li className="header__items-content">
          <a href="#">My Drafts</a>
        </li>
        <li className="header__items-content">
          <a href="#">My Applications</a>
        </li>
        <li className="header__items-content">
          <a href="/create">Create CV</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default AppHeader;
