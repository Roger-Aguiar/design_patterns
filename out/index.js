"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concrete_shape_1 = require("./AbstractFactory/classes/concrete.shape");
var director_1 = require("./Builder/classes/director");
var rectangle_builder_1 = require("./Builder/classes/rectangle.builder");
var square_builder_1 = require("./Builder/classes/square.builder");
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
function executeBuilder(director, shape) {
    switch (shape.toLowerCase()) {
        case "square":
            var builderSquare = new square_builder_1.ConcreteSquareBuilder(10);
            director.setSquareBuilder(builderSquare);
            console.log("Square Builder");
            director.buildSquare();
            var squareArea = builderSquare.getSquareArea();
            console.log("Square area: ".concat(squareArea.area));
            break;
        case "rectangle":
            var builderRectangle = new rectangle_builder_1.ConcreteRectangleBuilder(10, 5);
            director.setRectangleBuilder(builderRectangle);
            console.log("Rectangle Builder");
            director.buildRectangle();
            var rectangleArea = builderRectangle.getRectangleArea();
            console.log("Rectangle Builder: ".concat(rectangleArea.area));
    }
}
var director = new director_1.Director();
executeBuilder(director, 'rectangle');
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