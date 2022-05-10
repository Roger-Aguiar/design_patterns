import { Shape } from "../common_interfaces/shape";

export class Circle implements Shape {
  calculateArea(value: number): number {
    return +(Math.PI * Math.pow(value, 2)).toFixed(2);
  }
}
