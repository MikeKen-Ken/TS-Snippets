export class Currying {
    public start(): void {
        const fun = this.curry(this.sumNumber);
        console.log(fun(1)(2)(6));
    }

    curry(fun: Function): Function {
        return function curried(...args: number[]) {
            if (args.length >= fun.length) {
                return fun(...args);
            } else {
                return function(...arg: number[]) {
                    return curried(...args.concat(arg));
                };
            }
        };
    }

    sumNumber(a: number, b: number, c: number): number {
        return a + b + c;
    }
}
