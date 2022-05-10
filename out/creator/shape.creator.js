"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeCreator = void 0;
var ShapeCreator = /** @class */ (function () {
    function ShapeCreator() {
    }
    ShapeCreator.prototype.createShape = function (value) {
        var shape = this.factoryMethod();
        return shape.calculateArea(value);
    };
    return ShapeCreator;
}());
exports.ShapeCreator = ShapeCreator;
//# sourceMappingURL=shape.creator.js.map