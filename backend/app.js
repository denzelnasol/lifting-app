const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose
    .connect("mongodb+srv://admin-denzel:Test123@cluster0.j9wp6.mongodb.net/exercisesDB", {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });
