const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-exercise', adminController.getAddExercise);

router.post('/add-exercise', adminController.postExercise);


module.exports = router;