"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concrete_circle_1 = require("./concrete_creator_classes/concrete.circle");
var concrete_square_1 = require("./concrete_creator_classes/concrete.square");
function execute(creator) {
    var area = creator.createShape(5);
    console.log("Area: ".concat(area.toString()));
}
console.log("It displays the area of a square with sides equal 5.");
execute(new concrete_square_1.ConcreteSquare());
console.log("\nIt displays the area of a circle with radius equal 5.");
execute(new concrete_circle_1.ConcreteCircle());
//# sourceMappingURL=index.js.map