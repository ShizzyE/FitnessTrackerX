const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("✅ Database Connection Established"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Database Connection Established"))

//Routing
const workoutRouter = require('./routes/workouts');
app.use('/workouts', workoutRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})