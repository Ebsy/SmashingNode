var fs = require("fs"),
    filename = process.argv[2],
    spawn = require("child_process").spawn;

if (!filename) throw Error("Please supply a filename to watch!");

fs.watch(filename, function() {
    let ls = spawn("ls", ["-lh", filename]);
    ls.stdout.pipe(process.stdout);
    //console.log("File " + filename + " changed!..");

});

console.log("Watching target.txt for changes... ")