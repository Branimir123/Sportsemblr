const fs = require('fs');
const path = require('path');

module.exports = function (models) {
  const data = {}

  fs.readdirSync('./app/data')
    .filter(x => x.includes('-data'))
    .forEach((file) => {
      const dataModule = require(path.join(__dirname, file))(models)

      Object.keys(dataModule)
        .forEach((key) => {
          data[key] = dataModule[key]
        })
    })

  return data
}