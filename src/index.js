// add
function add(a, b) {
	return a + b;
}

// multiple
function multiple(a, b) {
	return a * b;
}

// output
function output(a) {
	if (a > 0) {
		return 'hello';
	} else if (a < -10) {
		return 'world';
	}
	return 'other';
}

module.exports = { add, multiple, output }