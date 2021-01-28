import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Menu from "./components/Pages/Menu/index";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
    <Switch>
      <Route exact path="https://chrishadj.github.io/Pizza-react/" component={App} />
      <Route path="https://chrishadj.github.io/Pizza-react/menu" component={Menu} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
