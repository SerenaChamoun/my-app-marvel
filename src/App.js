import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>

        {/* <Route path="/comics/:title">
          <Search />
        </Route> */}

        <Route path="/character/:id/comics">
          <Comics />
        </Route>

        <Route exact path="characters/:name">
          <Search />
        </Route>

        <Route exact path="/characters">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
