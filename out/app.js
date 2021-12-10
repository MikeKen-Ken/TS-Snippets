"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currying_1 = require("./currying");
var App = /** @class */ (function () {
    function App() {
    }
    /** Entry point of our app */
    App.start = function () {
        var currying = new currying_1.Currying();
        currying.start();
    };
    return App;
}());
App.start();
//# sourceMappingURL=app.js.map