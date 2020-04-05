"use strict";
exports.__esModule = true;
var CProcessor = /** @class */ (function () {
    function CProcessor() {
    }
    CProcessor.prototype.process = function (car, brand, model) {
        console.log("Class car = " + car + ", brand = " + brand + " model = " + model);
    };
    return CProcessor;
}());
exports["default"] = CProcessor;
