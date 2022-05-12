import { RectangleBuilder } from "../interfaces/interface.rectangle.builder";
import { SquareBuilder } from "../interfaces/interface.square.builder";

export class Director{
    private squareBuilder: SquareBuilder;
    private rectangleBuilder: RectangleBuilder;

    public setSquareBuilder(squareBuilder: SquareBuilder){
        this.squareBuilder = squareBuilder;
    }

    public setRectangleBuilder(rectangleBuilder: RectangleBuilder){
        this.rectangleBuilder = rectangleBuilder;
    }

    public buildSquare(): void{
        this.squareBuilder.createSquare();
    }

    public buildRectangle(): void{
        this.rectangleBuilder.createRectangle();
    }
}