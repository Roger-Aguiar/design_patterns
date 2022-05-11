import { AbstractRectangle } from "../interfaces/abstract.rectangle";

export class Rectangle implements AbstractRectangle{
    calculateArea(): number {
        let length: number = 10;
        let height: number = 2;

        return length * height;
    }

}