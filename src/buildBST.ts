export class BST {
    private value: number = null;
    private left: BST = null;
    private right: BST = null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
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

    contains(value) {
        if (value === this.value) {
            return true;
        }
        if (value < this.value) {
            if (!this.left) {
                return false;
            }
            return this.left.contains(value);
        }
        if (value > this.value) {
            if (!this.right) {
                return false;
            }
            return this.right.contains(value);
        }
    }

    dft(iteratorFunc, order) {
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

    bft(iteratorFunc) {
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

    removeNode(value) {
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
    }

    getMinVal() {
        return this.left ? this.left.getMinVal() : this.value;
    }

    getMaxVal() {
        return this.right ? this.left.getMaxVal() : this.value;
    }
}
