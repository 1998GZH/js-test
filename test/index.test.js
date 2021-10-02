const assert = require('assert');
const { describe, it } = require('mocha');
const { add, multiple, output } = require('../src/index');

describe('index functional tools', function() {
	describe('#function add', function() {
		it('should return 3 when the 1 + 2', function() {
			assert.equal(3, add(1, 2));
		})
	});
	
	describe('#function multiple', function() {
		it('should return 9 when the 3 * 3', function() {
			assert.equal(9, multiple(3, 3));
		})
	})

	describe('#function output', function() {
		it('should return "hello" when the a > 0', function() {
			assert.equal('hello', output(3));
		});

		it('should return "world" when the a < -10', function() {
			assert.equal('world', output(-20));
		});
		
		it('should return "other" when the a < 0 && a >= -10', function() {
			assert.equal('other', output(-5));
		});
	})
});