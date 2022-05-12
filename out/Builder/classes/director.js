"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setSquareBuilder = function (squareBuilder) {
        this.squareBuilder = squareBuilder;
    };
    Director.prototype.buildSquare = function () {
        this.squareBuilder.createSquare();
    };
    return Director;
}());
exports.Director = Director;
//# sourceMappingURL=director.js.map