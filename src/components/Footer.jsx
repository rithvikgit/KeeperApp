import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return <p>
    <footer>CopyrightÂ© {currentYear}</footer>    
    </p>;
}

export default Footer;