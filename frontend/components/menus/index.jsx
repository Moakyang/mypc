import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jimin from "./jimin";
import Royce from "./royce";

function renderMenu(page) {
  let component;
  switch (page) {
    case "/jimin":
      component = <Jimin />;
      break;
    case "/royce":
      component = <Royce />;
      break;
  }
  return component;
}

function Menu(props) {
  const page = renderMenu(props.match.url);
  return <div>{page}</div>;
}

export default Menu;
