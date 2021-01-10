import React, { useEffect, useState } from 'react';
import Exercise from "./Exercise";
import Heading from "./Header";
import Footer from "./Footer";

const App = () => {
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

    const [exercise, setExercise] = useState([]);

    return (
            <div>
              <Heading />
              <div className="container">
              {exercise.map((data) => (
                <Exercise
                  key = {data._id}
                  name = {data.name}
                  img = {data.image}
                />
              ))}
              </div>
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

{/*{exercise.map((data) => (
    <div key={data._id}>
        <ul className="anime">
            <li>
            <li>
            <img src={data.image} alt={data.name} className="anime-img" />
            </li>
                <h1>
                    {data.name}
                </h1>
            </li>
            <li>
                <a href="/<%= data.id %>">View Exercise &#x21DB;</a>
            </li>
        </ul>
    </div>
))}*/}
