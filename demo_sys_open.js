var fs = require('fs');

fs.open('txt_sys_open_file.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});