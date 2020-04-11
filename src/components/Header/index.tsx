import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

type Props = {
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">{children}</header>
    </div>
  );
};

export default Header;
