import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar.js';
import Footer from './Component/Footer.js';
import Home from './Component/Home.js';
import Menu from './Component/Menu.js';
import AboutUs from './Component/AboutUs.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="./Component/Home.js" component={Home} />
          <Route path="./Component/Menu.js" component={Menu} />
          <Route path="/Component/AboutUs.js" component={AboutUs} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;