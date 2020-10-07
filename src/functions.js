const challenge = {};

challenge.foo_bar_qix = function(n){
	output = [];
	let numbers = new Map();
 	numbers.set(3, 'Foo');
	numbers.set(5, 'Bar');
	numbers.set(7, 'Qix');

	for (let [key, value] of numbers) {
    	if(n % key == 0){
			output.push(value);
		}
	}

	n_str = n.toString()
	for(let i=0;i<n_str.length;i++){
		if(numbers.has(parseInt(n_str[i]))){
			output.push(numbers.get(parseInt(n_str[i])));
		}
	}

	return output.length > 0 ? output.join('') : n_str;
}

module.exports = challenge;