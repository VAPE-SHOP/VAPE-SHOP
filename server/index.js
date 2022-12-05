const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.use('/user', userRoutes);

const db = 'mongodb://localhost/VAPE-STORE';
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log('Database temchi mrigla ..');
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
