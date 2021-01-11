import React, { useEffect, useState} from 'react';
import Exercise from "./ExerciseCard";
import Heading from "./../partials/Header";
import Footer from "./../partials/Footer";

import {Container, Row} from 'react-bootstrap';

function MainPage() {
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
      <Heading />
      <Container>
      <section>
          <h2 id="exercises">List of Exercises</h2>
          <Row>
          {exercise.map((data) => (
            <Exercise
              key = {data._id}
              name = {data.name}
              img = {data.image}
            />
          ))}
          </Row>
      </section>
      </Container>

      <Footer />
    </div>
    /*<div>
        <h1>Add New Exercise</h1>
        <form method="POST" action="http://localhost:8080/add-exercise">
            <div>
                <label>Name</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label>Image</label>
                <input type="text" name="image" required />
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" required />
            </div>

            <div>
                <button type="submit">Add Exercise</button>
            </div>
        </form>
    </div>*/
  );
}

export default MainPage;
