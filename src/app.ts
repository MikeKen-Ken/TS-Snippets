import { LinkedList } from './linkedList';

class App {
    /** Entry point of our app */
    public static start(): void {
        const arr: (number | string)[] = [1, 2, 5, '555', 3, 69, 8, 4];
        const linkedList = new LinkedList(arr);
        console.log(linkedList.getLast());
    }
}

App.start();
