import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Favorites from "./containers/Favorites";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Header from "./components/Header";

// Importation de Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faSearch);

function App() {
  // state to give a choice between characters and comics in search button
  const [route, setRoute] = useState("");

  //state to save the list of favorites on the browser
  const localFav = localStorage.getItem("favorites");
  let state;
  if (localFav) {
    state = JSON.parse(localFav);
  }

  console.log("state:" + state);
  const [favoriteItems, setFavoriteItems] = useState(state ? state : []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics
            route={route}
            setRoute={setRoute}
            favoriteItems={favoriteItems}
            setFavoriteItems={setFavoriteItems}
          />
        </Route>

        <Route path="/character/:id/comics">
          <Comics
            route={route}
            setRoute={setRoute}
            favoriteItems={favoriteItems}
            setFavoriteItems={setFavoriteItems}
          />
        </Route>

        <Route path="/favorites">
          <Favorites favorites={favoriteItems} />
        </Route>

        <Route exact path="/characters">
          <Characters
            route={route}
            setRoute={setRoute}
            favoriteItems={favoriteItems}
            setFavoriteItems={setFavoriteItems}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
