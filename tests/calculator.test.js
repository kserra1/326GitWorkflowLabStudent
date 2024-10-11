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

describe('Calculator natural log function',function(){
    const res = calculator.naturalLog(4);
    it('should return 1.3862943611198906', function() {
        assert.strictEqual(res, 1.3862943611198906);
    });
})