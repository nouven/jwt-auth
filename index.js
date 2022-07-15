const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

require('dotenv').config();
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connect successfully!");
})
app.use('/v1/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port: ${process.env.PORT}`)
})
