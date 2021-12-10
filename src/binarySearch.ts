export class BinarySearch {
    /**
     *
     * @param target target number
     * @param arr number arr, have sorted
     * @returns the number's index
     */
    public search(target: number, arr: number[]): number {
        if (arr.length == 1) {
            return 0;
        } else {
            if (arr.length == 2) {
                return arr[0] == target ? 0 : arr[1] == target ? 1 : -1;
            }
        }
        let low = 0;
        let high = arr.length - 1;
        let mid = Math.ceil((high - low) / 2);
        let searchSize = high - low;
        while (searchSize > 1) {
            searchSize = high - low;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] > target) {
                if (arr[low] == target) {
                    return low;
                }
                high = mid;
                mid = Math.ceil((mid - low) / 2);
            } else {
                if (arr[high] == target) {
                    return high;
                }
                low = mid;
                mid = low + Math.ceil((high - low) / 2);
            }
        }
        return -1;
    }
}
