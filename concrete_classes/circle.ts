import { Shape } from "../common_interfaces/shape";

export class Circle implements Shape {
  calculateArea(value: number): number {
    return +(Math.PI * value).toFixed(2);
  }
}
