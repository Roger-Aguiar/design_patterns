import { Shape } from "../common_interfaces/shape";

export class Square implements Shape {
  calculateArea(value: number): number {
    return Math.pow(value, 2);
  }
}
