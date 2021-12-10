"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    /** Entry point of our app */
    App.start = function () {
        function curry(f) {
            return function (a) {
                return function (b) {
                    return f(a, b);
                };
            };
        }
        function sum(a, b) {
            return a + b;
        }
        var numbers = [5, 6, 2, 3, 7];
        var max = Math.max.apply(this, numbers);
        console.log(max);
    };
    return App;
}());
App.start();
//# sourceMappingURL=app.js.map