// export class BTree {
//     private t: number;
//     private root: BTreeNode;
//     constructor(t: number) {
//         this.t = t;
//         this.root = new BTreeNode();
//         this.root.n = 0;
//         this.root.isLeaf = true;
//     }

//     private search(x: BTreeNode, key: number): BTreeNode {
//         let i = 0;
//         if (x == null) return x;
//         for (i = 0; i < x.n; i++) {
//             if (key < x.keys[i]) {
//                 break;
//             }
//             if (key == x.keys[i]) {
//                 return x;
//             }
//         }
//         if (x.isLeaf) {
//             return null;
//         } else {
//             return this.search(x.children[i], key);
//         }
//     }

//     private split(x: BTreeNode, pos: number, y: BTreeNode): void {
//         const z = new BTreeNode();
//         z.isLeaf = y.isLeaf;
//         z.n = this.t - 1;
//         for (let j = 0; j < this.t - 1; j++) {
//             z.keys[j] = y.keys[j + this.t];
//         }
//         if (!y.isLeaf) {
//             for (let j = 0; j < this.t; j++) {
//                 z.children[j] = y.children[j + this.t];
//             }
//         }
//         y.n = this.t - 1;
//         for (let j = x.n; j >= pos + 1; j--) {
//             x.children[j + 1] = x.children[j];
//         }
//         x.children[pos + 1] = z;

//         for (let j = x.n - 1; j >= pos; j--) {
//             x.keys[j + 1] = x.keys[j];
//         }
//         x.keys[pos] = y.keys[this.t - 1];
//         x.n = x.n + 1;
//     }

//     public insert(key: number): void {
//         const r = this.root;
//         if (r.n == 2 * this.t - 1) {
//             const s = new BTreeNode();
//             this.root = s;
//             s.isLeaf = false;
//             s.n = 0;
//             s.children[0] = r;
//             this.split(s, 0, r);
//             this.insertValue(s, key);
//         } else {
//             this.insertValue(r, key);
//         }
//     }

//     public contain(key: number): boolean {
//         return !!this.search(this.root, key);
//     }

//     private insertValue(x: BTreeNode, k: number): void {
//         if (x.isLeaf) {
//             let i = 0;
//             for (i = x.n - 1; i >= 0 && k < x.keys[i]; i--) {
//                 x.keys[i + 1] = x.keys[i];
//             }
//             x.keys[i + 1] = k;
//             x.n = x.n + 1;
//         } else {
//             let i = 0;
//             for (i = x.n - 1; i >= 0 && k < x.keys[i]; i--) {}
//             i++;
//             const tmp = x.children[i];
//             if (tmp.n == 2 * this.t - 1) {
//                 this.split(x, i, tmp);
//                 if (k > x.keys[i]) {
//                     i++;
//                 }
//             }
//             this.insertValue(x.children[i], k);
//         }
//     }
// }

// export class BTreeNode {
//     private _n = null;
//     private _keys: number[] = [];
//     private _children: BTreeNode[] = [];
//     private _isLeaf: boolean = null;
//     public set n(v: number) {
//         this._n = v;
//     }
//     public set isLeaf(v: boolean) {
//         this._isLeaf = v;
//     }
//     public get keys(): number[] {
//         return this._keys;
//     }
//     public get children(): BTreeNode[] {
//         return this._children;
//     }

//     public find(key: number): number {
//         const index = this._keys.findIndex((element) => {
//             element === key;
//         });
//         return index;
//     }
// }
