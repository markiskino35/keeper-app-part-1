import React from "react";

var currentYear = new Date().getFullYear();


function Footer(){
    return(
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;