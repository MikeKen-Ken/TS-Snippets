import chalk from 'chalk';
class App {
    public start(): void {
        this.testLiterType(false);
    }

    private testLiterType(type: 'left' | true): void {
        console.log(chalk.yellow(`${type}`));
    }
}

const app = new App();
app.start();
