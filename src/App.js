import logo from './logo.svg';
import './App.css';
import LandingPage from './component/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './component/NavBar';
import Fotter from './component/Fotter';
import Packagescomp from './component/Packagescomp';
import BillingPage from './component/BillingPage';
import { useState } from 'react';
import ScrollToTop from './component/ScrollToTop'; // Import the ScrollToTop component

function App() {
  const [temp, setTemp] = useState(false);

  return (
    <Router>
      <NavBar setTemp={setTemp} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage temp={temp} setTemp={setTemp} />} />
        <Route path="/packages/:pkgPlace" element={<Packagescomp temp={temp} setTemp={setTemp} />} />
        <Route path="/billingpage/:pkgData" element={<BillingPage temp={temp} setTemp={setTemp} />} />
        <Route path="/" element={<div>Test Page</div>} />
      </Routes>
      <Fotter setTemp={setTemp} />
    </Router>
  );
}
export default App;
