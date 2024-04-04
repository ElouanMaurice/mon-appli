const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://elouanmaurice:Ch%40rogne2002@cluster0.ylchjd5.mongodb.net/morningnews';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
  
