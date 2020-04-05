"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Shape = /** @class */ (function () {
    function Shape(name, noOfSides) {
        console.log("Shape : " + name);
    }
    Shape.prototype.GetName = function () {
        return this.name;
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(noOfSides) {
        var _this = _super.call(this, "Square", 4) || this;
        console.log("No. of sides: " + noOfSides);
        return _this;
    }
    Square.prototype.GetArea = function (side) {
        return side * side;
    };
    Square.prototype.GetPerimeter = function (side) {
        return side * 4;
    };
    Square.prototype.PrintColorAndName = function (color, nameS) {
        console.log("Color is : " + color + " Name: " + nameS);
    };
    return Square;
}(Shape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, noOfSides) {
        var _this = _super.call(this, "Rectangle", 4) || this;
        console.log("No. of sides: " + noOfSides);
        return _this;
    }
    Rectangle.prototype.GetArea = function (length, width) {
        return length * width;
    };
    Rectangle.prototype.GetPerimeter = function (length, width) {
        return (length + width) * 2;
    };
    Rectangle.prototype.PrintColorAndName2 = function (color, nameR) {
        console.log(" Color is : " + color + " Name is : " + nameR + " ");
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
