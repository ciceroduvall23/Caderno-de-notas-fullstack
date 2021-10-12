const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://cicinho:990874210@cluster0.8w70c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
   useNewUrlParser:true,
   useUnifiedTopology:true

});

module.exports = connection;