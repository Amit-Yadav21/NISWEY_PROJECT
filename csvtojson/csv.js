// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('salary_data.csv')
    .then(users => {
        // users is a JSON array
        // write JSON array to file
        fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
               throw err;
            }
        });

        fs.readFileSync('users.json',)

    }).catch(err => {
        // log error if any
        console.log(err);
    });