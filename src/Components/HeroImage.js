//header will go here
import "./styles.css";
import React from "react";
import Hero from "./images/"

function HeroImage() {
    return (
        <img className="hero" src={Hero} alt="Katlyn Boches" />

    );
}

export default HeroImage;