import { ConcreteShape } from "./AbstractFactory/classes/concrete.shape";
import { AbstractFactory } from "./AbstractFactory/interfaces/abstract.factory";
import { ConcreteCircle } from "./Factory/concrete_creator_classes/concrete.circle";
import { ConcreteSquare } from "./Factory/concrete_creator_classes/concrete.square";
import { ShapeCreator } from "./Factory/creator/shape.creator";

/*function executeFactory(creator: ShapeCreator, value: number) {
    let area: number = creator.createShape(value);
    console.log(`Area: ${area.toString()}`);
}

console.log("It displays the area of a square with sides equal 9.");
executeFactory(new ConcreteSquare(), 9);

console.log("\nIt displays the area of a circle with radius equal 9.");
executeFactory(new ConcreteCircle(), 9);*/

function executeAbastractFactory(factory: AbstractFactory){
    const square = factory.createSquare();
    const circle = factory.createCircle();

    console.log(`Area of the square with side 5: ${square.calculateArea()}`);
    console.log(`Area of the circle with radius 5: ${circle.calculateArea()}`);
}

console.log("Client testing the Abstract Factory...");
executeAbastractFactory(new ConcreteShape());