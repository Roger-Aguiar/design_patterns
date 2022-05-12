"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.calculateArea = function (value) {
        return +(Math.PI * Math.pow(value, 2)).toFixed(2);
    };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map