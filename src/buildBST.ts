export class BST {
    private value: number = null;
    private left: BST = null;
    private right: BST = null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value): void {
        if (value <= this.value) {
            if (!this.left) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value): boolean {
        if (value < this.value) {
            if (!this.left) {
                return false;
            }
            return this.left.contains(value);
        } else if (value > this.value) {
            if (!this.right) {
                return false;
            }
            return this.right.contains(value);
        } else {
            return true;
        }
    }

    dft(iteratorFunc, order): void {
        if (order === 'pre-order') {
            iteratorFunc(this.value);
        }

        if (this.left) {
            this.left.dft(iteratorFunc, order);
        }

        if (order === 'in-order') {
            iteratorFunc(this.value);
        }

        if (this.right) {
            this.right.dft(iteratorFunc, order);
        }

        if (order === 'post-order') {
            iteratorFunc(this.value);
        }
    }

    bft(iteratorFunc): void {
        const queue = [this.left, this.right];
        while (queue.length) {
            const treeNode = queue.shift();
            iteratorFunc(treeNode);
            if (treeNode.left) {
                queue.push(treeNode.left);
            }
            if (treeNode.right) {
                queue.push(treeNode.right);
            }
        }
    }

    removeNode(value): BST {
        if (value == this.value) {
            if (!this.left && !this.right) {
                return null;
            }
            if (!this.left) {
                return this.right;
            }
            if (!this.right) {
                return this.left;
            }
            this.value = this.right.getMinVal();
            this.right = this.right.removeNode(this.value);
        } else if (value < this.value) {
            this.left = this.left.removeNode(value);
        } else {
            this.right = this.right.removeNode(value);
        }
        return this;
    }

    getMinVal(): number {
        return this.left ? this.left.getMinVal() : this.value;
    }

    getMaxVal(): number {
        return this.right ? this.left.getMaxVal() : this.value;
    }
}
