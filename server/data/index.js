const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

module.exports = function (models, connectionString) {
  mongoose.Promise = global.Promise;
  mongoose.connect(connectionString);

  mongoose.connection.on('error', () => {
    console.log('MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
  });

  const data = {}

  fs.readdirSync('./server/data')
    .filter(x => x.includes('-data'))
    .forEach((file) => {
      const dataModule = require(path.join(__dirname, file))(models)

      Object.keys(dataModule)
        .forEach((key) => {
          data[key] = dataModule[key]
        })
    });

  return data
}