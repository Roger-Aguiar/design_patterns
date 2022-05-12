import { ConcreteShape } from "./AbstractFactory/classes/concrete.shape";
import { AbstractFactory } from "./AbstractFactory/interfaces/abstract.factory";
import { Director } from "./Builder/classes/director";
import { ConcreteSquareBuilder } from "./Builder/classes/square.builder1";
import { ConcreteCircle } from "./Factory/concrete_creator_classes/concrete.circle";
import { ConcreteSquare } from "./Factory/concrete_creator_classes/concrete.square";
import { ShapeCreator } from "./Factory/creator/shape.creator";

function executeFactory(creator: ShapeCreator, value: number) {
    let area: number = creator.createShape(value);
    console.log(`Area: ${area.toString()}`);
}

function executeAbastractFactory(factory: AbstractFactory){
    const square = factory.createSquare();
    const circle = factory.createCircle();
    const triangle = factory.createTriangle();
    const rectangle = factory.createRectangle();

    console.log(`Area of the square with side 5: ${square.calculateArea()}`);
    console.log(`Area of the circle with radius 5: ${circle.calculateArea()}`);
    console.log(`Area of the triangle with base equal 10 and height equal 2: ${triangle.calculateArea()}`);
    console.log(`Area of the rectangle with length equal 10 and height equal 2: ${rectangle.calculateArea()}`);
}

function executeBuilder(director: Director){
  const builder = new ConcreteSquareBuilder(10);
  director.setSquareBuilder(builder);
  console.log("Square Builder");
  director.buildSquare();
  let squareArea = builder.getSquareArea();
  console.log(`Square area: ${squareArea.area}`);
}

const director = new Director()
executeBuilder(director);

function executeFactoryFunction() {
  console.log("It displays the area of a square with sides equal 9.");
  executeFactory(new ConcreteSquare(), 9);

  console.log("\nIt displays the area of a circle with radius equal 9.");
  executeFactory(new ConcreteCircle(), 9);
}

function executeFunctionAbstractFactoryFunction() {
  console.log("Client testing the Abstract Factory...");
  executeAbastractFactory(new ConcreteShape());
}


