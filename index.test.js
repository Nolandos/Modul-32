const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(23);
          
            const expected = '23s';
          
            assert.equal(actual, expected);
        });
        it('should return 0 seconds if no value is passed', () => {
            const actual = formatDate();
          
            const expected = '0s';
          
            assert.equal(actual, expected);
        });
    });
  
    describe('minutes', () => {
        it('should work for one digit minutes and seconds', () => {
            const actual = formatDate(77);
          
            const expected = '1m 17s';
          
            assert.equal(actual, expected);
        });
        it('should work for 2 digits minutes and seconds', () => {
            const actual = formatDate(1240);
          
            const expected = '20m 40s';
          
            assert.equal(actual, expected);
        });
        it('should return only minutes', () => {
            const actual = formatDate(120);
          
            const expected = '2m';
          
            assert.equal(actual, expected);
        });
    });
  
    describe('hours', () => {
        it('should work for one digithours, minutes and seconds', () => {
            const actual = formatDate(3705);
          
            const expected = '1h 1m 45s';
          
            assert.equal(actual, expected);
        });
        it('should work for 2 digits hours, minutes and seconds', () => {
            const actual = formatDate(54125);
          
            const expected = '15h 2m 5s';
          
            assert.equal(actual, expected);
        });
        it('should work for hours only', () => {
            const actual = formatDate(7200);
          
            const expected = '2h';
          
            assert.equal(actual, expected);
        });
        it('should work for hours and minutes', () => {
            const actual = formatDate(3660);
          
            const expected = '1h 1m';
          
            assert.equal(actual, expected);
        });
        it('should work for hours and seconds', () => {
            const actual = formatDate(3605);
          
            const expected = '1h 5s';
          
            assert.equal(actual, expected);
        });
    });
  });