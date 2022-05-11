import { AbstractTriangle } from "../interfaces/abstract.triangle";

export class Triangle implements AbstractTriangle {
  calculateArea(): number {
    let base = 10;
    let height = 2;

    return (base * height) / 2;
  }
}
