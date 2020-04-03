import {Shapes } from "./interface"
abstract class Shape implements Shapes {
    name : string;
    noOfSides : number;
    constructor (name : string, noOfSides : number){
        console.log(`Shape : ${name}`);
    }

     GetName(): string {
        return this.name;
     }
    abstract GetArea(noOfSides : number, anotherSide? : number): number;
    abstract GetPerimeter(noOfSides : number, anotherSide? : number): number;
    
}

class Square extends Shape {
    side : number;

    constructor (noOfSides : number){
        
        super("Square", 4);
        console.log(`No. of sides: ${noOfSides}`);
    }
    GetArea(side : number) : number {
        return side*side;
    }
    GetPerimeter(side : number) : number {
        return side*4;
    }
    PrintColorAndName (color : string, nameS : string){
        console.log(`Color is : ${color} Name: ${nameS}`);
        
     }

}

class Rectangle extends Shape {
    length : number;
    width : number;

    constructor (name : string, noOfSides : number){
        super("Rectangle", 4);
        console.log(`No. of sides: ${noOfSides}`);
    }

    GetArea(length : number, width : number) : number {
        return length*width;
    }
    GetPerimeter(length : number, width : number) : number {
        return (length+width)*2;
    }
    PrintColorAndName2 (color : string, nameR : string ){
        console.log(` Color is : ${color} Name is : ${nameR} `);
     }
    
}
export {Rectangle, Square };