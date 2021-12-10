import { Currying } from './currying';
class App {
    /** Entry point of our app */
    public static start(): void {
        const currying = new Currying();
        currying.start();
    }
}

App.start();
