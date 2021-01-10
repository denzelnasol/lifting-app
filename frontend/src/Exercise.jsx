import React from "react";
import {Card, Button} from 'react-bootstrap';

function Exercise(props) {
    return (

    <Card border="dark" style={{ width: '19%' }}>
      <Card.Img className="card-img-top" varient="top" src={props.img} alt={props.name}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Button variant="dark" href="/<%= data.id %>">View Exercise</Button>
      </Card.Body>
    </Card>
    );
}

export default Exercise;
