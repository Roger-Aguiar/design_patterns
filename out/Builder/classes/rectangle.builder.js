"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteRectangleBuilder = void 0;
var rectangle_1 = require("./rectangle");
var ConcreteRectangleBuilder = /** @class */ (function () {
    function ConcreteRectangleBuilder(length, width) {
        this.length = length;
        this.width = width;
        this.reset();
    }
    ConcreteRectangleBuilder.prototype.reset = function () {
        this.rectangle = new rectangle_1.Rectangle();
    };
    ConcreteRectangleBuilder.prototype.createRectangle = function () {
        this.rectangle.length = this.length;
        this.rectangle.width = this.width;
        this.rectangle.area = this.rectangle.calculateArea();
    };
    ConcreteRectangleBuilder.prototype.getRectangleArea = function () {
        var result = this.rectangle;
        this.reset();
        return result;
    };
    return ConcreteRectangleBuilder;
}());
exports.ConcreteRectangleBuilder = ConcreteRectangleBuilder;
//# sourceMappingURL=rectangle.builder.js.map