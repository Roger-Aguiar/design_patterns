import { Shape } from "../common_interfaces/shape";
import { Circle } from "../concrete_classes/circle";
import { ShapeCreator } from "../creator/shape.creator";

export class ConcreteCircle extends ShapeCreator {
  factoryMethod(): Shape {
    return new Circle();
  }
}
