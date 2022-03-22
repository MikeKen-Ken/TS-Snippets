export class Node {
    public value = null;
    public height = 1;
    public left: Node = null;
    public right: Node = null;
    constructor(number) {
        this.value = number;
    }
}

export class AVLTree {
    public static getHeight(node: Node): number {
        return node === null ? 0 : node.height;
    }

    public static rightRotate(y: Node): Node {
        const x = y.left;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height =
            Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height =
            Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    }

    public static leftRotate(x: Node): Node {
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height =
            Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height =
            Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    }

    public static getBalanceFactor(node: Node): number {
        if (node == null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    public static insert(node: Node, value: number): Node {
        if (node === null) {
            return new Node(value);
        }
        if (value > node.value) {
            node.right = this.insert(node.right, value);
        } else {
            node.left = this.insert(node.left, value);
        }

        node.height =
            Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor > 1) {
            if (value < node.left.value) {
                return this.rightRotate(node);
            } else if (value > node.left.value) {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        if (balanceFactor < -1) {
            if (value > node.right.value) {
                return this.leftRotate(node);
            } else if (value < node.right.value) {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }
        return node;
    }

    static getMinValueNode(node: Node): Node {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    static deleteNode(node: Node, value: number): Node {
        if (node == null) {
            return node;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null || node.right === null) {
                const temp = node.left === null ? node.right : node.left;
                node = temp === null ? null : temp;
            } else {
                const temp = this.getMinValueNode(node.right);
                node.value = temp.value;
                node.right = this.deleteNode(node.right, temp.value);
            }
        }
        if (node == null) {
            return node;
        }

        node.height =
            Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor > 1) {
            if (this.getBalanceFactor(node.left) >= 0) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        if (balanceFactor < -1) {
            if (this.getBalanceFactor(node.right) <= 0) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }
        return node;
    }
}
