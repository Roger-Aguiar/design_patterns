import { AbstractCircle } from "../interfaces/abstract.circle";

export class Circle implements AbstractCircle {
  calculateArea(): number {
    return +(Math.PI * Math.pow(5, 2)).toFixed(2);
  }
}
