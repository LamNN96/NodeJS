const fs = require('fs');
const saveFile = (filename, data) => {
    fs.writeFileSync(fileName, date);
}
const readFile = (fileName, callback) => {
    fs.readFile(fileName, {encoding : 'utf-8'},
        (err, data) => {
            callback(data);
        }
        );
}

module.exports = {
  saveFile,
  readFile
}