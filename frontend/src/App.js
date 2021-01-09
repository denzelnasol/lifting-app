import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

const App = () => {
    useEffect(() => {
        const getAPI = async () => {
            const response = await fetch('http://localhost:8080/');
            const data = await response.json();

            try {
                console.log(data);
                setLoading(false);
                setExercise(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAPI();
    }, []);

    const [exercise, setExercise] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
        <header>
          <h1>My Exercise List</h1>
          <a href="http://localhost:8080">View All Exercises</a>
          <a href="http://localhost:8080/add-exercise">Add A New Exercise &#x27A2;</a>
          </header>

            <div>
                {loading ? (
                    <div>Loading</div>
                ) : (
                    <div className="container">
                        {exercise.map((data) => (
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
                        ))}
                    </div>
                )}
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
        </Fragment>
    );
};

export default App;
