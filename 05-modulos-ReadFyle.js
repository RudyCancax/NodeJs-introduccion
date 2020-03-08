const fs = require('fs');

fs.readFile('./04-archivo-pre-construido.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});