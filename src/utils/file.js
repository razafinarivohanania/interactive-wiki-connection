const fs = require('fs');

module.exports.readFile = function(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if (error)
                reject(error);
            else
                resolve(`${data}`);
        });
    });
}