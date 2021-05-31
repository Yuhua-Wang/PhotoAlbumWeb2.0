import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Manage from "./components/Manage";

function App() {
  return (
      <Router>
          <switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/About' component={About}/>
          </switch>
      </Router>

  );
}

export default App;
