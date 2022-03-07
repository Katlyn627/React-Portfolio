import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom">
        <a href="https://github.com/Katlyn627"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/katlyn-boches-20110732/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href="https://katlyn627.github.io/react-portfolio/"><img src="https://user-images.githubusercontent.com/86095070/156977005-fa0d377e-883a-49af-b3e1-85d12658e73e.png" alt="KatlynBoches.com" className="icon"/></a>
    </footer>
    )
}

export default Footer;