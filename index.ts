import { ConcreteSquare } from "./concrete_creator_classes/concrete.square";
import { ShapeCreator } from "./creator/shape.creator";

function execute(creator: ShapeCreator) {
    let area: number = creator.createShape(5);
    console.log(`Area: ${area.toString()}`);
}

console.log("It displays the are of a square with sides equal 5.");
execute(new ConcreteSquare());