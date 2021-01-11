import React from "react";

var date = new Date();

function Footer() {
    return (
    <footer>
      <div className="container-fluid">
        <p>Made by Denzel Nasol, {date.getFullYear()}</p>
      </div>
    </footer>
    );
}

export default Footer;
