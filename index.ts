import { ConcreteCircle } from "./concrete_creator_classes/concrete.circle";
import { ConcreteSquare } from "./concrete_creator_classes/concrete.square";
import { ShapeCreator } from "./creator/shape.creator";

function execute(creator: ShapeCreator) {
    let area: number = creator.createShape(5);
    console.log(`Area: ${area.toString()}`);
}

console.log("It displays the area of a square with sides equal 5.");
execute(new ConcreteSquare());

console.log("\nIt displays the area of a circle with radius equal 5.");
execute(new ConcreteCircle());