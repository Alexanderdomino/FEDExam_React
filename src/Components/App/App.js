import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import Profile from '../Profile/Profile'
import Navbar from "../NavBar/NavBar";
import CreateAmount from "../CreateAmount/CreateAmount";
import LogLiquid from "../LogLiquid/LogLiquid";
import IntakeList from "../IntakeList/IntakeList";
import Footer from "../Footer/Footer";

function App() {
  return (
      <Router>
          <h1 className={"App-Header"}>Liquid Logger</h1>
          <Navbar />
              <Routes>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/amount" element={<CreateAmount />} />
                  <Route path="/log" element={<LogLiquid />} />
                  <Route path="/list" element={<IntakeList />} />
                  <Route path="/" element={<Profile />} />
              </Routes>
          <Footer />
      </Router>
  );
}

export default App;
