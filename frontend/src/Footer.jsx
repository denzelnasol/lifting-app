import React from "react";

var date = new Date();

function Footer() {
    return (
    <div>
        <footer>
            <p>Made by Denzel Nasol, {date.getFullYear()}</p>
        </footer>
    </div>
    );
}

export default Footer;
