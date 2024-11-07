import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./component/LandingPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./component/NavBar";
import Fotter from "./component/Fotter";
import Packagescomp from "./component/Packagescomp";
import BillingPage from "./component/BillingPage";
import { useState } from "react";
import ScrollToTop from "./component/ScrollToTop"; // Import the ScrollToTop component
import NewPackageComp from "./component/NewPkgComp";

import fram from "./assets/heroBody.webp";

function App() {
  const [temp, setTemp] = useState(false);

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fram})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Router>
        <NavBar setTemp={setTemp} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<LandingPage temp={temp} setTemp={setTemp} />}
          />
          <Route
            path="/packages/:pkgPlace"
            element={<Packagescomp temp={temp} setTemp={setTemp} />}
          />
          <Route
            path="/billingpage/:pkgData"
            element={<BillingPage temp={temp} setTemp={setTemp} />}
          />
          <Route
            path="/pakgPage/:pkgPlace"
            element={<NewPackageComp temp={temp} setTemp={setTemp} />}
          />
        </Routes>
        <Fotter setTemp={setTemp} />
      </Router>
    </div>
  );
}
export default App;
