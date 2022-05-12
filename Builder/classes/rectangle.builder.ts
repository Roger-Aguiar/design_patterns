import { RectangleBuilder } from "../interfaces/interface.rectangle.builder";
import { Rectangle } from "./rectangle";

export class ConcreteRectangleBuilder implements RectangleBuilder {
  private rectangle: Rectangle;

  constructor(private length: number, private width: number) {
    this.reset();
  }

  public reset(): void {
    this.rectangle = new Rectangle();
  }

  createRectangle(): void {
    this.rectangle.length = this.length;
    this.rectangle.width = this.width;
    this.rectangle.area = this.rectangle.calculateArea();
  }

  getRectangleArea(): Rectangle {
    const result = this.rectangle;
    this.reset();
    return result;
  }
}
