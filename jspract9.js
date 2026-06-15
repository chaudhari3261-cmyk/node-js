const fs = require('fs');
fs.writeFile('temp.txt','this is file module demo.\n',function(err){
    if(err) throw err;
    console.log('file created and data writen...');

    fs.appendFile('temp.txt','deta append using using appex module \n',function(err){
        if (err) throw err;
         console.log('file appended...');

    fs.readFile('temp.txt','utf8',function(err,data){
        if(err) throw err;
        console.log(" file content.....\n" + data);

    fs.unlink('temp.txt',function(err){
        if (err) throw err;
        console.log('file deleted...');
    });

    });
    });
});

