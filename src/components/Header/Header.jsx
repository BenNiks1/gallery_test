import React from "react";
import { HeaderNav } from "./HeaderNav";
import SignUp from "../Login";
import Logout from "../Register";
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
        <SignUp />
        <Logout />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: state.localData.isAuthorized,
});

export default connect(mapStateToProps)(Header);
