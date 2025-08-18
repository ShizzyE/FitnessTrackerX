const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

// Get all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find().select("-__v");
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
});

// Get a specific workout by ID
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id).select("-__v");
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.json(workout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new workout
router.post('/', async (req, res) => {
    const workout = new Workout({
        name: req.body.name,
        reps: req.body.reps,
        sets: req.body.sets,
        weight: req.body.weight,
        date: req.body.date || Date.now(),
    })
    try {
        const newWorkout = await workout.save();
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a workout by ID
router.patch('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        
        const fields = ['name', 'reps', 'sets', 'weight', 'date'];
        fields.forEach(field => {
            if (req.body[field] !== undefined) {
                workout[field] = req.body[field]
            }
        });

        const updatedWorkout = await workout.save();
        res.json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a workout by ID

router.delete('/:id', async (req,res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        };
        res.json({ message: 'Workout deleted successfully' });
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = router;