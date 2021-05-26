import React from "react";
import { HeaderNav } from "./HeaderNav";
import Login from "../Login";
import Register from "../Register";
import { connect } from "react-redux";
import AddNewPhoto from "../AddNewPhoto";

const Header = ({ isAuthorized }) => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src="/logo.png" alt="logo" />
      </a>
      <HeaderNav />
      <div className="header__entry">
        {isAuthorized && <AddNewPhoto />}
        {!isAuthorized && (
          <>
            <Login />
            <Register />
          </>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: state.localData.isAuthorized,
});

export default connect(mapStateToProps)(Header);
