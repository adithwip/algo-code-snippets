import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import WebFontLoader from "webfontloader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import Container from "./components/Container/component";
import Home from "./pages/Home/component";
import SumOfNum from "./pages/SumOfNum/component";
import MultiplyOfNum from "./pages/MultiplyOfNum/component";
import PrimeNumberSequence from "./pages/PrimeNumberSequence/component";
import FibonacciSequence from "./pages/FibonacciSequence/components";

WebFontLoader.load({
  google: {
    families: ["Bungee Inline:400:latin", "Montserrat:500,700:latin"],
  },
});

const Routes = (
  <Container>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sum-of-num">
          <SumOfNum />
        </Route>
        <Route path="/multiply-of-num">
          <MultiplyOfNum />
        </Route>
        <Route path="/prime-number-sequence">
          <PrimeNumberSequence />
        </Route>
        <Route path="/fibonacci-number-sequence">
          <FibonacciSequence />
        </Route>
      </Switch>
    </Router>
  </Container>
);

ReactDOM.render(
  <React.StrictMode>{Routes}</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
