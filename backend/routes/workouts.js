const express = require('express');
const { 
    createworkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllors/workoutControllor');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth)

//get all workouts
router.get('/', getWorkouts);

//get a single workout
router.get('/:id', getWorkout);
//POST a new workkouts
router.post('/', createworkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;