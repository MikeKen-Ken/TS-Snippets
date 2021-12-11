export class Currying {
    public start(): void {
        const fun = this.curry(this.sum);
        console.log(fun(1)(2)(6));
    }

    curry(fun: Function): Function {
        return function curried(...arg: number[]) {
            if (arg.length >= fun.length) {
                return fun(...arg);
            } else {
                return function(...a: number[]) {
                    return curried(...arg.concat(a));
                };
            }
        };
    }

    sum(a: number, b: number, c: number): number {
        return a + b + c;
    }
}
