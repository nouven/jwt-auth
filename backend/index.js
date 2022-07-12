const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');

require('dotenv').config();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connect successfully!");
})
app.use('/v1/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port: ${process.env.PORT}`)
})
