class ListNode {
    data: dataType;
    next: ListNode;
    constructor(data: dataType) {
        this.data = data;
        this.next = null;
    }

    setNext(next: ListNode): void {
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

    initData(): void {
        const nodeArr = this.listData.map((data) => {
            return new ListNode(data);
        });
        this.head = nodeArr[0];
        for (let i = 0; i < nodeArr.length - 1; i++) {
            nodeArr[i].next = nodeArr[i + 1];
        }
    }

    public clear(): void {
        this.head = null;
    }

    public length(): number {
        let count = 0;
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
            count++;
        }
        count++;
        return count;
    }

    public getHead(): any {
        return this.head;
    }

    public getLast(): ListNode {
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }
    public pop(): void {}
    public push(): void {}
    public shift(): void {}
    public unshift(): void {}
    public delete(): void {}
    public find(): void {}
}

type dataType = number | string;
