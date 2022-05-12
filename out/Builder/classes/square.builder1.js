"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSquareBuilder = void 0;
var square_1 = require("./square");
var ConcreteSquareBuilder = /** @class */ (function () {
    function ConcreteSquareBuilder(side) {
        this.side = side;
        this.reset();
    }
    ConcreteSquareBuilder.prototype.reset = function () {
        this.square = new square_1.Square();
    };
    ConcreteSquareBuilder.prototype.createSquare = function () {
        this.square.side = this.side;
        this.square.area = this.square.calculateArea();
    };
    ConcreteSquareBuilder.prototype.getSquareArea = function () {
        var result = this.square;
        this.reset();
        return result;
    };
    return ConcreteSquareBuilder;
}());
exports.ConcreteSquareBuilder = ConcreteSquareBuilder;
//# sourceMappingURL=square.builder1.js.map