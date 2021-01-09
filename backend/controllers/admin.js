const Exercise = require('../models/Exercise');

exports.getIndex = async (req, res) => {
    const exercise = await Exercise.find((data) => data);

    try {
        console.log(exercise);
        //res.status(200).render('index', {exercise: exercise});

        res.json(exercise);
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
    res.status(200).render('edit-exercise', {editing: false});
};

exports.getEditExercise = async (req, res) => {
  const exerciseId = req.params.exerciseId;

  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect('/');
  }

  const exercise = await Exercise.findById(exerciseId);

  try {
    if (!exerciseId) {
      return res.redirect('/');
    }
    console.log(exercise);
    res.status(200).render('edit-exercise', { exercise: exercise, editing: editMode});
  } catch (err) {
    console.log(err);
  }
};

exports.postExercise = (req, res) => {
    const { name, image, description } = req.body;

    const exercise = new Exercise({ name: name, image: image, description: description});
    exercise.save();
    console.log('Exercise added to database');

    res.status(201).redirect('http://localhost:3000');
};

exports.postEditExercise = (req, res) => {
  const exerciseId = req.body.exerciseId;
  const { name, image, description } = req.body;

  Exercise.findById(exerciseId)
  .then((exercise) => {
    exercise.name = name;
    exercise.image = image;
    exercise.description = description;

    return exercise.save();
  })
  .then(() => {
    console.log('Item Updated');
    res.status(201).redirect('/');
  })
  .catch((err) => {
    console.log(err);
  });
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
