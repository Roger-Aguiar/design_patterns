import { Shape } from "../common_interfaces/shape";

export abstract class ShapeCreator{
    abstract factoryMethod(): Shape;

    public createShape(value: number): number{
        const shape = this.factoryMethod();
        return shape.calculateArea(value);
    }
}