const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('stylePoints', () => {
        it('Should return correct Notes value for different notes', () => {
            const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);
          
            const expected = 49.5;
          
            assert.equal(actual, expected);
        });
        it('Should return correct Notes value for repetetive notes', () => {
            const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);
          
            const expected = 55.0;
          
            assert.equal(actual, expected);
        });
        it('Should return correct Notes value for too many notes (e.q introductory error)', () => {
            const actual = calculateStylePoints([18, 18.5, 18.0, 18.0, 19, 19, 19, 19]);
          
            const expected = 54.5;
          
            assert.equal(actual, expected);
        });
        it('Should return error for not enough amount notes(e.q introductory error)', () => {
            const actual = calculateStylePoints([18, 18.5, 18.0]);
          
            const expected = 'error, wrong value!';
          
            assert.equal(actual, expected);
        });
        it('Should return error when value note is out of range (0-20)', () => {
            const actual = calculateStylePoints([-3, 18.5, -18.0, 18.0, 19]);
          
            const expected = 'error, wrong value!';
          
            assert.equal(actual, expected);
        });
        it('Should return error when value note is wrong value (eq. 15.2, 17.3)', () => {
            const actual = calculateStylePoints([16.1, 17.2, 16.5, 16, 18]);
          
            const expected = 'error, wrong value!';
          
            assert.equal(actual, expected);
        });
    });
  });