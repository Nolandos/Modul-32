const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('distancePoints', () => {
        it('should return correct amount points for normal hill ', () => {
            const actual = calculateDistancePoints(106.5, 109, 98);
          
            const expected = 77.0;
          
            assert.equal(actual, expected);
        });
        it('should return correct amount points for large hill ', () => {
            const actual = calculateDistancePoints(133, 134, 120);
          
            const expected = 83.4;
          
            assert.equal(actual, expected);
        });
        it('should return correct amount points for mammoth hill ', () => {
            const actual = calculateDistancePoints(223, 225, 200);
          
            const expected = 147.6;
          
            assert.equal(actual, expected);
        });
    });
  });