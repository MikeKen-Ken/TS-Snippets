class ListNode {
    data: dataType;
    next: ListNode;
    constructor(data: dataType) {
        this.data = data;
        this.next = null;
    }

    setNext(next: ListNode) {
        this.next = next;
    }
}
export class LinkedList {
    head: ListNode;
    listData: (number | string)[];

    constructor(data: (number | string)[]) {
        this.listData = data;
        this.initData();
    }

    initData() {
        const nodeArr = this.listData.map(data => {
            return new ListNode(data);
        });
        this.head = nodeArr[0];
        for (let i = 0; i < nodeArr.length - 1; i++) {
            nodeArr[i].next = nodeArr[i + 1];
        }
    }

    public clear() {
        this.head = null;
    }

    public length() {
        let count = 0;
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
            count++;
        }
        count++;
        return count;
    }
    public getHead() {
        return this.head;
    }
    public getLast() {
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }
    public pop() {}
    public push() {}
    public shift() {}
    public unshift() {}
    public delete() {}
    public find() {}
}

type dataType = number | string;
