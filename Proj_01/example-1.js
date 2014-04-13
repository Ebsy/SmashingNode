var fs = require('fs')
    , stdin = process.stdin
    , stdout = process.stdout;

fs.readdir(process.cwd(), function (err, files) { //callback here

	console.log(''); //spacing

    if (!files.length) {  //if files length 'null'
        return console.log('    \033[31m No files to show!\033[39m\n');
    }

    console.log("   Select which file or directory you want to see\n");

    function file(i) {
        var filename = files[i];

        fs.stat(__dirname + "/" + filename, function (err, stat) {
          if (stat.isDirectory()) {
            console.log("   "+i+"   \033[36m" + filename + "/\033[39m");
          } 
          else {
            console.log("   "+i+"   \033[90m" + filename + "\033[39m");
          }

        i++;

        if (i == files.length) {
            read(); // get input
        } 
        else {
            file(i); //continue loop
        }
    });
    }

    function read() {
        console.log("");
        stdout.write("    \033[33mEnter your choice: \033[39m");
        stdin.resume();
        stdin.on("data", option); //on data event, call option
    }

    function option (data) {
        var filename = files[Number(data)];
        if (!filename) { //if input is not one of the listed numbers
            stdout.write("  \033[31mEnter your choice: \033[39m");
        }
        else {
            stdin.pause();
            fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
                console.log("");
                console.log("\033[90m" + data.replace(/(.*)/g, "     $1") + "\033[39m");
            });
        }
    }

    file(0);
});