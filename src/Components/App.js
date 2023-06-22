import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import Profile from './Profile/Profile'
import Navbar from "./NavBar/NavBar";
import CreateAmount from "./CreateAmount/CreateAmount";

function App() {
  return (
      <Router>
          <Navbar />
              <Routes>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/amount" element={<CreateAmount />} />
                  <Route path="/" element={<Profile />} />
              </Routes>
      </Router>
  );
}

export default App;
