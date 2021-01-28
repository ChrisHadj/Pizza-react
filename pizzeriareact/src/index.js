import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Menu from "./components/Pages/Menu/index";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Menu" component={Menu} />
    </Switch>
  </HashRouter>,
  rootElement
);
