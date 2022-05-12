export class Square {
  public side: number;
  public area: number;
  
  calculateArea(): number {
    return Math.pow(this.side, 2);
  }
}
