var fs = require('fs');

function async (err, files) {
	console.log(files);
}

fs.readdir('.', async);