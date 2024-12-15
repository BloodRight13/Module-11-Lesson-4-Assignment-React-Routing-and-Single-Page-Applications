// Task 1
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Browse Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comics"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Comics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


// Task 2
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseCharacters from './pages/BrowseCharacters';
import Comics from './pages/Comics';
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

function BrowseCharacters() {
  const characters = [
    { id: 1, name: 'Character 1' },
    { id: 2, name: 'Character 2' },
  ];

  return (
    <div>
      <h1>Browse Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// Task 3
import React from 'react';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* Optionally add navigation links back to the home page or other sections */}
    </div>
  );
}
export default App; Navigation; BrowseCharacters; NotFound;

// Final App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseCharacters from './pages/BrowseCharacters';
import Comics from './pages/Comics';
import CharacterDetails from './pages/CharacterDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all route for undefined paths */}
      </Routes>
    </Router>
  );
}
