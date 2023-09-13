const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/DATABASENAME';

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreatedIndex: true,
};

mongoose.connect(dbURI, dbOptions);

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${dbURI}`);
});

db.on('error', (err) => {
    console.error(`MongoDb connection error: ${err}`);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;