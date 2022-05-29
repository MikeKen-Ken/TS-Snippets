import { Currying } from './currying';

class App {
    public start(): void {
        const c = new Currying();
        c.start();
    }
}

const app = new App();
app.start();
