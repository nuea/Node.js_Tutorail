var fs = require('fs');

fs.appendFile('txt_sys_create_file.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});