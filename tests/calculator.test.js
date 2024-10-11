const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});



// Add your tests here
describe('Quaids test', function() {
    const res = calculator.sine(Math.PI);
    it('sine of pi is 0', function() {
        assert.strictEqual(res, 0);
    });
});