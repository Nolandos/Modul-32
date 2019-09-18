const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('totalPoints', () => {
        it('should return correct amount points for normal hill ', () => {
            const actual = calculateTotalPoints(111, 109, 98, [19.0, 19.5, 19.0, 19.0, 19.0], -14.4, 3.2);
          
            const expected = 131.8;
          
            assert.equal(actual, expected);
        });
        it('should return correct amount points for large hill ', () => {
            const actual = calculateTotalPoints(134, 134, 120, [19.0, 20.0, 19.5, 19.0, 18.5], -5.4, 0);
          
            const expected = 137.3;
          
            assert.equal(actual, expected);
        });
        it('should return correct amount points for mammoth hill ', () => {
            const actual = calculateTotalPoints(225, 225, 200, [18.0, 18.5, 18.0, 18.0, 19.0], -9.9, 8.7);
          
            const expected = 203.3;
          
            assert.equal(actual, expected);
        });
    });
  });