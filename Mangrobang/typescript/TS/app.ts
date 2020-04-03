import {Square, Rectangle,} from "./abs"
import {Shapes} from "./interface"

var sq = new Square(0);
sq.PrintColorAndName("black", "Square" );
console.log("Area of square : " + sq.GetArea(1));
console.log("Area of square : " + sq.GetPerimeter(2));
// console.log(sq.GetName());
var re = new Rectangle("Circle", 2);
re.PrintColorAndName2("black", "Rectangle");
console.log("Area of Rectanle : " + re.GetArea(2,2));
console.log("Area of square : " + re.GetPerimeter(3,3));
// console.log(re.GetName());
 

// Square;
// Rectangle;