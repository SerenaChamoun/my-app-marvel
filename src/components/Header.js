import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../assets/logo.jpg";

const Header = () => {
  let history = useHistory();
  return (
    <div
      className="header"
      style={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "yellow",
      }}
    >
      <img alt="logo Marvel" src={logo} />
      <nav
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            style={{
              width: "140px",
              height: "50px",
              borderStyle: "none",
              backgroundColor: "#EC1D24",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={(event) => {
              history.push("/characters");
            }}
          >
            Characters
          </button>
        </div>
        <div>
          <button
            style={{
              width: "140px",
              height: "50px",
              borderStyle: "none",
              backgroundColor: "#EC1D24",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={(event) => {
              history.push("/comics");
            }}
          >
            Comics
          </button>
        </div>
        <div>
          <button
            style={{
              width: "140px",
              height: "50px",
              borderStyle: "none",
              backgroundColor: "#EC1D24",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={(event) => {
              history.push("/favorites");
            }}
          >
            Favorites
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
