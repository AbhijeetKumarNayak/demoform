const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const viewRouter = require('./routes/viewRoutes');
const dotenv = require('dotenv');


const app = express();
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

app.use(bodyParser.json());
const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.inads.mongodb.net/<dbname>?retryWrites=true&w=majority';
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.use('/', viewRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port 3000');
});
