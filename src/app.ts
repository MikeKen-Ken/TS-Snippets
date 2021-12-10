import { BinarySearch } from './binarySearch';
class App {
    /** Entry point of our app */
    public static start(): void {
        const binarySearch = new BinarySearch();
        console.log(binarySearch.search(1, [0, 1, 2]));
    }
}

App.start();
