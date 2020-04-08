import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./pages/about"
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
