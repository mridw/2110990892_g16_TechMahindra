//concrete classes implementing Shape Interface
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        return "Drawing a Circle";
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        return "Drawing a Rectangle";
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        return "Drawing a Square";
    };
    return Square;
}());
//Factory Class
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.getShape = function (shapeType) {
        switch (shapeType.toLowerCase()) {
            case "circle":
                return new Circle();
            case "rectangle":
                return new Rectangle();
            case "square":
                return new Square();
            default:
                return null;
        }
    };
    return ShapeFactory;
}());
//Handeling UI Interactions
document.addEventListener("DOMContentLoaded", function () {
    var shapeSelect = document.getElementById("shapeSelect");
    var drawButton = document.getElementById("drawButton");
    var outputDiv = document.getElementById("output");
    drawButton.addEventListener("click", function () {
        var shapeType = shapeSelect.value;
        var shape = ShapeFactory.getShape(shapeType);
        if (shape) {
            outputDiv.innerText = shape.draw();
        }
        else {
            outputDiv.innerText = "Invalid shape selection";
        }
    });
});
