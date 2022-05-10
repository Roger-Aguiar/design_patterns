import { Shape } from "../common_interfaces/shape";
import { Square } from "../concrete_classes/square";
import { ShapeCreator } from "../creator/shape.creator";

export class ConcreteSquare extends ShapeCreator {
  public factoryMethod(): Shape {
    return new Square();
  }
}
