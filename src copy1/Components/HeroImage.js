//header will go here
import "./style.css";
import React from "react";
import Hero from "./images/linked in background.png"

function HeroImage() {
    return (
        <img className="hero" src={Hero} alt="Katlyn Boches" />

    );
}

export default HeroImage;