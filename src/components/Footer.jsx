import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return <p>
    <footer>Copyright© {currentYear}</footer>    
    </p>;
}

export default Footer;