import React, { useEffect, useState} from "react";
import ExerciseCard from "./ExerciseCard";
import {Row} from 'react-bootstrap';

function Exercises() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
      const getAPI = async () => {
          const response = await fetch('http://localhost:8080/');
          const data = await response.json();

          try {
              console.log(data);
              setExercise(data);
          } catch (error) {
              console.log(error);
          }
      };
      getAPI();
  }, []);

  return (
    <div>
      <h2 id="exercises">List of Exercises</h2>
      <Row>
        {exercise.map((data) => (
          <ExerciseCard
            key = {data._id}
            name = {data.name}
            img = {data.image}
          />
        ))}
      </Row>
    </div>
  );
}

export default Exercises;
