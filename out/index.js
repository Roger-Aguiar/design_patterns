"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concrete_shape_1 = require("./AbstractFactory/classes/concrete.shape");
var director_1 = require("./Builder/classes/director");
var square_builder1_1 = require("./Builder/classes/square.builder1");
var concrete_circle_1 = require("./Factory/concrete_creator_classes/concrete.circle");
var concrete_square_1 = require("./Factory/concrete_creator_classes/concrete.square");
function executeFactory(creator, value) {
    var area = creator.createShape(value);
    console.log("Area: ".concat(area.toString()));
}
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
function executeBuilder(director) {
    var builder = new square_builder1_1.ConcreteSquareBuilder(10);
    director.setSquareBuilder(builder);
    console.log("Square Builder");
    director.buildSquare();
    var squareArea = builder.getSquareArea();
    console.log("Square area: ".concat(squareArea.area));
}
var director = new director_1.Director();
executeBuilder(director);
function executeFactoryFunction() {
    console.log("It displays the area of a square with sides equal 9.");
    executeFactory(new concrete_square_1.ConcreteSquare(), 9);
    console.log("\nIt displays the area of a circle with radius equal 9.");
    executeFactory(new concrete_circle_1.ConcreteCircle(), 9);
}
function executeFunctionAbstractFactoryFunction() {
    console.log("Client testing the Abstract Factory...");
    executeAbastractFactory(new concrete_shape_1.ConcreteShape());
}
//# sourceMappingURL=index.js.map