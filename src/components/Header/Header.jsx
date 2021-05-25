import React from "react";
import { HeaderNav } from "./HeaderNav";
import SignUp from "../SignUp";


export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src="/logo.png" alt="logo" />
      </a>
      <HeaderNav />
      <div className="header__entry">
        <SignUp />
      </div>
    </header>
  );
};
