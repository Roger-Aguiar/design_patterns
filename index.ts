import { ConcreteCircle } from "./Factory/concrete_creator_classes/concrete.circle";
import { ConcreteSquare } from "./Factory/concrete_creator_classes/concrete.square";
import { ShapeCreator } from "./Factory/creator/shape.creator";

function executeFactory(creator: ShapeCreator) {
    let area: number = creator.createShape(5);
    console.log(`Area: ${area.toString()}`);
}

console.log("It displays the area of a square with sides equal 5.");
executeFactory(new ConcreteSquare());

console.log("\nIt displays the area of a circle with radius equal 5.");
executeFactory(new ConcreteCircle());