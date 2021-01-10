import React from "react";

function Exercise(props) {
    return (
    <div className="note">
      <img src={props.img} alt={props.name}/>
      <h1>{props.name}</h1>
      <a href="/<%= data.id %>">View Exercise &#x21DB;</a>
    </div>
    );
}

export default Exercise;
