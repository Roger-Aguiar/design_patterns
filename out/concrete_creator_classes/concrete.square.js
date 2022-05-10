"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSquare = void 0;
var square_1 = require("../concrete_classes/square");
var shape_creator_1 = require("../creator/shape.creator");
var ConcreteSquare = /** @class */ (function (_super) {
    __extends(ConcreteSquare, _super);
    function ConcreteSquare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteSquare.prototype.factoryMethod = function () {
        return new square_1.Square();
    };
    return ConcreteSquare;
}(shape_creator_1.ShapeCreator));
exports.ConcreteSquare = ConcreteSquare;
//# sourceMappingURL=concrete.square.js.map