const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-exercise', adminController.getAddExercise);

router.get('/edit-exercise/:exerciseId', adminController.getEditExercise);

router.post('/add-exercise', adminController.postExercise);

router.post('/edit-exercise', adminController.postEditExercise);

router.get('/:exerciseId', adminController.getExercise);

router.post('/delete', adminController.postDelete);

module.exports = router;
