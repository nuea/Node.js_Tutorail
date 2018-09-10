var fs = require('fs');

fs.writeFile('txt_sys_write_file.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});