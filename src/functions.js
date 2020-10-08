const challenge = {};

challenge.foo_bar_qix = function(n){
	let output = [];
	let numbers = new Map();
 	numbers.set(3, 'Foo');
	numbers.set(5, 'Bar');
	numbers.set(7, 'Qix');

	let rule_match = false;
	for (let [key, value] of numbers) {
    	if(n % key == 0){
    		rule_match = true;
			output.push(value);
		}
	}

	n_str = n.toString()
	for(let i=0;i<n_str.length;i++){
		let num = parseInt(n_str[i]);
		if(numbers.has(num)){
			rule_match = true;
			output.push(numbers.get(num));
			continue;
		}
		output.push(n_str[i]);
	}

	let values = new Set();
	for (let value of numbers.values()) {
		values.add(value);
	}
	numbers.clear();
	numbers.set(0, '*');
	for(let i=0;i<output.length;i++){
		if(numbers.has(parseInt(output[i]))){
			output[i] = numbers.get(parseInt(output[i]));
			continue;
		}
		if(!values.has(output[i]) && rule_match){
			delete output[i];
		}
	}

	return output.length > 0 ? output.join('') : n_str;
}

module.exports = challenge;