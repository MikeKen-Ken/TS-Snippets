import { binarySearch } from '../src/binarySearch';
import { assert } from 'chai';
import { it } from 'mocha';

describe('Binary Search', function () {
    const arr = [-10, -3, -1, 0, 4, 6, 7, 12, 354, 1245];
    it('at the start index', function () {
        assert.equal(binarySearch(arr, -10), 0);
    });
    it('at the end index', function () {
        assert.equal(binarySearch(arr, 1245), 9);
    });
    it('find zero', function () {
        assert.equal(binarySearch(arr, 0), 3);
    });
    it('find negative', function () {
        assert.equal(binarySearch(arr, -3), 1);
    });
    it('not include', function () {
        assert.equal(binarySearch(arr, 99), null);
    });
});
