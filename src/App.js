import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "../src/Components/NavTabs";
import Home from "../src/Components/pages/Home";
import Projects from "../src/Components/pages/Projects";
import Contact from "../src/Components/pages/Contact";
import HeroImage from "../src/Components/HeroImage";
import FooterInfo from "../src/Components/FooterInfo"

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <FooterInfo/>
      </div>
    </Router>
  );
}

export default App;