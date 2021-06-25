const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection;
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE === 'production') {
  app.use
}



app.use(routes);


