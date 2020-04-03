"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
function carNumPairs(car, value) {
    console.log('Function : car no.= ' + car + ', value = ' + value);
}
function carPairs(car, value) {
    console.log('Function : car no. = ' + car + ', value = ' + value);
}
var carProc = carNumPairs;
carProc(1007, 12345);
var carProc2 = carPairs;
carProc2(1007, "Thousands");
var proc = new classes_1["default"]();
proc.process(2, 'Honda', 'Civic');
