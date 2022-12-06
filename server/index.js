const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const liquidRoutes = require('./routes/liquid');
const vapeRoutes = require('./routes/vape');
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.use('/user', userRoutes);
app.use('/liquid', liquidRoutes);
app.use('/vape',vapeRoutes)
const db = 'mongodb+srv://root:root@vape-shop.5xtlkgk.mongodb.net/test';
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log('Database temchi mrigla ..');
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
