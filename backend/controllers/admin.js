const Exercise = require('../models/Exercise');

// exports.getIndex = async (req, res) => {
//     const exercise
// }

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

exports.getAddExercise = (req, res) =>  {
    res.status(200).render('edit-exercise');
};

exports.postExercise = (req, res) => {
    const { name, image, description } = req.body;

    const exercise = new Exercise({ name: name, image: image, description: description});
    exercise.save();
    console.log('Exercise added to database');
    res.status(201).redirect('/');
};