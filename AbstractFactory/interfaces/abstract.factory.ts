import { Circle } from "../classes/circle";
import { Square } from "../classes/square";

export interface AbstractFactory{
    createSquare(): Square;
    createCircle(): Circle;
}