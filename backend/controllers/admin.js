const Exercise = require('../models/Exercise');

exports.getIndex = async (req, res) => {
    const exercise = await Exercise.find((data) => data);

    try {
        console.log(exercise);
        res.status(200).render('index', {exercise: exercise});
    } catch (err) {
        console.log(err);
    }
};

exports.getExercise = async (req, res) => {
    const exerciseId = req.params.exerciseId;

    const exercise = await Exercise.findById(exerciseId, (exercise) => exercise);

    try {
        console.log(exercise);
        res.status(200).render('exercise', {exercise: exercise});
    } catch (err) {
        console.log(err);
    }
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

exports.postDelete = async (req, res) => {
  const exerciseId = req.body.exerciseId;

  const exercise = await Exercise.findByIdAndRemove(exerciseId, (data) => data);

  try {
    console.log(exercise);
    console.log('Item Deleted');
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};
