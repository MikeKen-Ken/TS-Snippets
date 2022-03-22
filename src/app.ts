import { BST } from './buildBST';
class App {
    public start(): void {
        const bst = new BST(14);
        bst.insert(1);
        bst.insert(5);
        bst.insert(30);
        bst.insert(2);
        bst.removeNode(5);
        console.log(bst);
    }
}

const app = new App();
app.start();
