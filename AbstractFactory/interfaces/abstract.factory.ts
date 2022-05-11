import { Circle } from "../classes/circle";
import { Rectangle } from "../classes/rectangle";
import { Square } from "../classes/square";
import { Triangle } from "../classes/triangle";

export interface AbstractFactory{
    createSquare(): Square;
    createCircle(): Circle;
    createTriangle(): Triangle;
    createRectangle(): Rectangle;
}