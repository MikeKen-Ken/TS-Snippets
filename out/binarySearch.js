"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = void 0;
var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
    }
    BinarySearch.prototype.search = function (target, arr) {
        if (arr.length == 1) {
            return 0;
        }
        else {
            if (arr.length == 2) {
                return arr[0] == target ? 0 : arr[1] == target ? 1 : -1;
            }
        }
        var low = 0;
        var high = arr.length - 1;
        var mid = Math.ceil((high - low) / 2);
        var searchSize = high - low;
        while (searchSize > 1) {
            searchSize = high - low;
            if (arr[mid] == target) {
                return mid;
            }
            else if (arr[mid] > target) {
                if (arr[low] == target) {
                    return low;
                }
                high = mid;
                mid = Math.ceil((mid - low) / 2);
            }
            else {
                if (arr[high] == target) {
                    return high;
                }
                low = mid;
                mid = low + Math.ceil((high - low) / 2);
            }
        }
        return -1;
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;
//# sourceMappingURL=binarySearch.js.map