"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concrete_shape_1 = require("./AbstractFactory/classes/concrete.shape");
/*function executeFactory(creator: ShapeCreator, value: number) {
    let area: number = creator.createShape(value);
    console.log(`Area: ${area.toString()}`);
}

console.log("It displays the area of a square with sides equal 9.");
executeFactory(new ConcreteSquare(), 9);

console.log("\nIt displays the area of a circle with radius equal 9.");
executeFactory(new ConcreteCircle(), 9);*/
function executeAbastractFactory(factory) {
    var square = factory.createSquare();
    var circle = factory.createCircle();
    var triangle = factory.createTriangle();
    var rectangle = factory.createRectangle();
    console.log("Area of the square with side 5: ".concat(square.calculateArea()));
    console.log("Area of the circle with radius 5: ".concat(circle.calculateArea()));
    console.log("Area of the triangle with base equal 10 and height equal 2: ".concat(triangle.calculateArea()));
    console.log("Area of the rectangle with length equal 10 and height equal 2: ".concat(rectangle.calculateArea()));
}
console.log("Client testing the Abstract Factory...");
executeAbastractFactory(new concrete_shape_1.ConcreteShape());
//# sourceMappingURL=index.js.map