import './App.css';
import   React,{  Component} from 'react';
import Home from './page/home';
import Room  from './page/room';
import SeulRoom from './page/seulRoom';
import Erreur from './page/erreur';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './navbar';
import Data from './data';



function App() {
  return (
    <div className="App">
      <>
      <Router>
      <Navbar/>
        <Switch>
          <Route   path="/" exact  component={Home} />
          <Route  path="/room" exact  component={Room } />
          <Route  path="/erreur" exact component={Erreur } />
          <Route  path="/room/:slug" exact component={SeulRoom } />

        </Switch>
      </Router>
      </>
    </div>
  );
}

export default App;
