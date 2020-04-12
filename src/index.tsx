import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import WebFontLoader from "webfontloader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home/component";
import SumOfNum from "./pages/SumOfNum/component";

WebFontLoader.load({
  google: {
    families: ["Bungee Inline:400:latin", "Montserrat:500,700:latin"],
  },
});

function About() {
  return <h2>About</h2>;
}

const Routes = (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/sum-of-num">
        <SumOfNum />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{Routes}</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
