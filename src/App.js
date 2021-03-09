
import './App.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetail/CountryDetails';

function App() {



  return (
    <Router>
      <Switch>

        <Route path="/header">
          <Header />
        </Route>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/country/:alpha3Code">
          <CountryDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
