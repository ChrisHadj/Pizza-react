import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Menu from "./components/Pages/Menu/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Menu" component={Menu} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
