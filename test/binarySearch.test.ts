import { binarySearch } from './../src/binarySearch';
import { assert, expect } from 'chai';
import { it } from 'mocha';

describe('test binary search', function() {
    const arr = [-10, -3, -1, 0, 4, 6, 7, 12, 354, 1245];
    it('at start index', function() {
        assert.equal(binarySearch(arr, -10), 0);
    });
    it('at end index', function() {
        assert.equal(binarySearch(arr, 1245), 9);
    });
    it('find zero', function() {
        assert.equal(binarySearch(arr, 0), 3);
    });
    it('find negative', function() {
        assert.equal(binarySearch(arr, -3), 1);
    });
    it('not include', function() {
        assert.equal(binarySearch(arr, 99), null);
    });
});
