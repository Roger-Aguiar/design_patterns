import { AbstractFactory } from "../interfaces/abstract.factory";
import { Circle } from "./circle";
import { Square } from "./square";

export class ConcreteShape implements AbstractFactory {  
  createCircle(): Circle {
    return new Circle();
  }

  createSquare(): Square {
    return new Square();
  }
}
