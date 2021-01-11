import React from 'react';
import Heading from "./../partials/Header";
import Footer from "./../partials/Footer";
import Exercises from "./Exercises";

import {Container} from 'react-bootstrap';

function MainPage() {
  return (
    <div>
      <Heading />
      <Container>
      <section>
        <Exercises />
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
