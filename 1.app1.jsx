// Task 3

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse-characters" component={BrowseCharacters} />
          <Route path="/character-details" component={CharacterDetails} />
          <Route path="/comics" component={Comics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;