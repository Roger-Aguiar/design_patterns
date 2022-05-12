import { SquareBuilder } from "../interfaces/interface.square.builder";

export class Director{
    private squareBuilder: SquareBuilder;

    public setSquareBuilder(squareBuilder: SquareBuilder){
        this.squareBuilder = squareBuilder;
    }

    public buildSquare(): void{
        this.squareBuilder.createSquare();
    }
}