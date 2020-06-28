import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>You are welcome</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:dan" component={SingleRoom} />
    </div>
  );
}

export default App;
