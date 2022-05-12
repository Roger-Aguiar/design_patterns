"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteShape = void 0;
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var square_1 = require("./square");
var triangle_1 = require("./triangle");
var ConcreteShape = /** @class */ (function () {
    function ConcreteShape() {
    }
    ConcreteShape.prototype.createCircle = function () {
        return new circle_1.Circle();
    };
    ConcreteShape.prototype.createSquare = function () {
        return new square_1.Square();
    };
    ConcreteShape.prototype.createRectangle = function () {
        return new rectangle_1.Rectangle();
    };
    ConcreteShape.prototype.createTriangle = function () {
        return new triangle_1.Triangle();
    };
    return ConcreteShape;
}());
exports.ConcreteShape = ConcreteShape;
//# sourceMappingURL=concrete.shape.js.map