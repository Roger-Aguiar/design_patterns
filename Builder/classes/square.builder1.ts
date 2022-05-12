import { SquareBuilder } from "../interfaces/interface.square.builder";
import { Square } from "./square";

export class ConcreteSquareBuilder implements SquareBuilder {
  private square: Square;

  constructor(private side: number) {
    this.reset();
  }

  public reset(): void {
    this.square = new Square();
  }

  createSquare(): void {
    this.square.side = this.side;
    this.square.area = this.square.calculateArea();
  }

  getSquareArea(): Square {
    const result = this.square;
    this.reset();
    return result;
  }
}
