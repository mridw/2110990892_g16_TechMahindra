interface Shape{
    draw():string;
}
//concrete classes implementing Shape Interface
class Circle implements Shape{
    draw():string{
        return "Drawing a Circle";
    }
}
class Rectangle implements Shape{
    draw():string{
        return "Drawing a Rectangle";
    }
}
class Square implements Shape{
    draw():string{
        return "Drawing a Square";
    }
}
//Factory Class
class ShapeFactory{
    static getShape(shapeType:string):Shape|null{
        switch (shapeType.toLowerCase()){
            case "circle":
                return new Circle();
            case "rectangle":
                return new Rectangle();
            case "square":
                return new Square();
            default:
                return null;
        }
    }
}

//Handeling UI Interactions
document.addEventListener("DOMContentLoaded",()=>{
    const shapeSelect = document.getElementById("shapeSelect") as HTMLSelectElement;
    const drawButton = document.getElementById("drawButton") as HTMLButtonElement;
    const outputDiv = document.getElementById("output") as HTMLDivElement;

    drawButton.addEventListener("click",()=>{
        const shapeType = shapeSelect.value;
        const shape = ShapeFactory.getShape(shapeType);

        if(shape){
            outputDiv.innerText=shape.draw();
        }
        else{
            outputDiv.innerText="Invalid shape selection";
        }
    });
});