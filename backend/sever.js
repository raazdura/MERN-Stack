require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the app' });
});

// workouts routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);


// connect to db
mongoose.connect('mongodb+srv://raazdura:duraaz1234@raazdura.lmpiqa6.mongodb.net/MERNStackDb?retryWrites=true&w=majority ')
    .then(() => {
        //listen to requests
        app.listen(process.env.PORT || 4000, () => {
            console.log('Connected to db and Listening on port 4000');
        });
    })
    .catch((err) => {
        console.log(err);
    });


