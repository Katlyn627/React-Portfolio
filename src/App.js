import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import Home from "./Components/pages/Home";
import Portfolio from "./Components/pages/Portfolio";
import Projects from "./Components/pages/Projects";
import Contact from "./Components/pages/Contact";
import HeroImage from "./Components/HeroImage";
import FooterInfo from "./Components/FooterInfo"

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/src/Components/pages/Portfolio.js" component={Portfolio} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <FooterInfo/>
      </div>
    </Router>
  );
}

export default App;