import { AbstractSquare } from "../interfaces/abstract.square";

export class Square implements AbstractSquare {
  calculateArea(): number {
    return Math.pow(5, 2);
  }
}
