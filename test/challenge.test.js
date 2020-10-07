const assert = require('assert');
const functions = require('../src/functions.js');

let test_inputs = [
    { 'input' : 1,  'output' : '1'},
    { 'input' : 2,  'output' : '2'},
    { 'input' : 3,  'output' : 'FooFoo'},
    { 'input' : 4,  'output' : '4'},
    { 'input' : 5,  'output' : 'BarBar'},
    { 'input' : 6,  'output' : 'Foo'},
    { 'input' : 7,  'output' : 'QixQix'},
    { 'input' : 8,  'output' : '8'},
    { 'input' : 9,  'output' : 'Foo'},
    { 'input' : 10, 'output' : 'Bar'},
    { 'input' : 13, 'output' : 'Foo'},
    { 'input' : 15, 'output' : 'FooBarBar'},
    { 'input' : 21, 'output' : 'FooQix'},
    { 'input' : 33, 'output' : 'FooFooFoo'},
    { 'input' : 51, 'output' : 'FooBar'},
    { 'input' : 53, 'output' : 'BarFoo'}
]

describe('Challenge tests', () => {
	test_inputs.forEach(({input, output}) => { 
		it(`returns ${input} => "${output}"`, function(done) {
			assert.equal(functions.foo_bar_qix(input), output);
			done();
		});
	});
});