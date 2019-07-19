const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const user = require('./routes/user');

const app = express();

// Database connection setup
let url = 'mongodb+srv://test:test1@cluster0-cydys.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);

let port = 3001;

app.listen(port, () => {
    console.log('Server running on port numner ' + port);
});

