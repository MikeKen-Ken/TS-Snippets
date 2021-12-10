"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currying = void 0;
var Currying = /** @class */ (function () {
    function Currying() {
    }
    Currying.prototype.start = function () {
        var fun = this.curry(this.sum);
        console.log(fun(1)(2)(6));
    };
    Currying.prototype.curry = function (fun) {
        return function curried() {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            if (arg.length >= fun.length) {
                return fun.apply(void 0, arg);
            }
            else {
                return function () {
                    var a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        a[_i] = arguments[_i];
                    }
                    return curried.apply(void 0, arg.concat(a));
                };
            }
        };
    };
    Currying.prototype.sum = function (a, b, c) {
        return a + b + c;
    };
    return Currying;
}());
exports.Currying = Currying;
//# sourceMappingURL=currying.js.map