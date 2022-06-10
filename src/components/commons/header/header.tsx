import { Header } from "antd/lib/layout/layout";
import React from "react";
import "./Header.scss";

const AppHeader: React.FC = () => (
  <>
    <Header className="header items-center grid grid-rows-1 grid-flow-col h-26">
      <div className="header__items-logo px-2 py-2 w-1/6 justify-self-start">
        <img
          className="w-60 ml-2 my-2"
          src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
          alt="This is a logo of student CV."
        />
      </div>
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
      </ul>
      <div className="mr-2 justify-self-end">
        <button className="btn">Login</button>
      </div>
    </Header>
  </>
);

export default AppHeader;
