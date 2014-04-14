var net = require("net");

//Create Server

var server = net.createServer(function(conn) {
    console.log('\033[90m   new connection!\033[39m');
});

//listen

server.listen(3000, function() {
    console.log("\033[95m   server listening on *:3000\033[39m");
});