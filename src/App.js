import React, { useState } from "react";

//components

import Results from "./components/Results";
import { UserContext } from "./components/UserContext";
import { cities } from "./cities";

//react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [myCity, setMyCity] = useState(cities[0]);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ myCity, setMyCity }}>
          <Route exact path="/">
            <Results />
          </Route>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
