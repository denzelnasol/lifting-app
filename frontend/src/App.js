import React, { useEffect, useState } from 'react';
import Exercise from "./Exercise";
import Heading from "./Header";
import Footer from "./Footer";

import {Container, Row} from 'react-bootstrap';

const App = () => {
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
            <h2 class="section-heading">List of Exercises</h2>
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
            {/*<div>
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
            </div>*/}
        <Footer />
    </div>
  );
};

export default App;
