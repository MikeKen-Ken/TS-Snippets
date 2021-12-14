export class BinarySearch {
    public search(targetData: number, data: number[]): number {
        if (data.length === 1) {
            return 0;
        }
        if (data.length === 2) {
            return data[0] === targetData ? 0 : data[1] === targetData ? 1 : -1;
        }

        let startIndex = 0;
        let endIndex = data.length - 1;
        let midIndex = Math.ceil((endIndex - startIndex) / 2);
        let searchSize = endIndex - startIndex;

        while (searchSize > 1) {
            searchSize = endIndex - startIndex;
            if (data[midIndex] === targetData) {
                return midIndex;
            }
            if (data[midIndex] > targetData) {
                if (data[startIndex] === targetData) {
                    return startIndex;
                }
                endIndex = midIndex;
                midIndex = Math.ceil((midIndex - startIndex) / 2);
            } else {
                if (data[endIndex] === targetData) {
                    return endIndex;
                }
                startIndex = midIndex;
                midIndex = startIndex + Math.ceil((endIndex - startIndex) / 2);
            }
        }
        return -1;
    }
}
