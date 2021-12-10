"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binarySearch_1 = require("./binarySearch");
var App = /** @class */ (function () {
    function App() {
    }
    /** Entry point of our app */
    App.start = function () {
        var binarySearch = new binarySearch_1.BinarySearch();
        console.log(binarySearch.search(1, [0, 1, 2]));
    };
    return App;
}());
App.start();
//# sourceMappingURL=app.js.map