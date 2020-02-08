const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

server.use(cors());

mongoose.connect('mongodb+srv://tindev:tindev@cluster0-ltel9.gcp.mongodb.net/retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);
server.listen(3333); 
