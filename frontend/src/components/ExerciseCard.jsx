import React from "react";
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

function ExerciseCard(props) {

    return (

    <Card border="dark" style={{ width: '19%' }}>
      <Card.Img className="card-img-top" varient="top" src={props.img} alt={props.name}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Link to={`/exercises/${props.name}`}>
          <Button variant="dark">View Exercise</Button>
        </Link>
      </Card.Body>
    </Card>
    );
}

export default ExerciseCard;
