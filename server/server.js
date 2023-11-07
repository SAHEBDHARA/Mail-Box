const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/Auth');
const emailRoute = require('./routes/Post');
const cors = require('cors');

const app = express();
const port = 3000;
const URL = 'mongodb+srv://mailbox:VY0RLF1MaU1mh2DC@cluster0.smu6wi5.mongodb.net/?retryWrites=true&w=majority'; // Replace this with your actual MongoDB URI

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB is connected');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.use(express.json()); // Body parsing middleware
app.use(cors()); 

// Example routes
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.post('/submit', (req, res) => {
  res.send('You have submitted a form');
});

app.use("/api/auth",authRoute);
app.use("/api/email",emailRoute);

// Handling 404 errors
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


