import { AbstractFactory } from "../interfaces/abstract.factory";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Triangle } from "./triangle";

export class ConcreteShape implements AbstractFactory {  
  createCircle(): Circle {
    return new Circle();
  }

  createSquare(): Square {
    return new Square();
  }

  createRectangle(): Rectangle{
    return new Rectangle();
  }
  
  createTriangle(): Triangle{
    return new Triangle();
  }
}
