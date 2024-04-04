const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:yCFHUcAemNXcS2bL@cluster0.yq93sfq.mongodb.net/evaluation-week3';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));