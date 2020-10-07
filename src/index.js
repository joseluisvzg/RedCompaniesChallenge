const functions = require('./functions.js');

/*
	Client function 
*/
module.exports = async function(app, passport) {
    line = await read_line();
    n = parseInt(line);
	result = functions.foo_bar_qix(n);
	console.log(result);
}

/*
	Helper function in order to read a line from standard input (terminal).
*/
async function read_line(){
	process.stdin.setEncoding ("utf-8");
	return new Promise(resolve => {
		process.stdin.on('data', function(data){
			process.stdin.pause();
  			return resolve(data.toString().trim());
		});
	});
}