class Shape {
    //creates shape and appends it to div
    constructor() {
        this.shape = $('<div>')
        this.width = '';
        this.height = '';
        this.radius = 'N/A';
        this.area = '';
        this.perimeter = '';
        $('#shapeContainer').append(this.shape);

        //removes shape when dbl clicked
        $(this.shape).dblclick(() => {
            this.shape.remove();
            $('#shapeInfo').html('');
        })

        //gives info when shape is clicked
        $(this.shape).click(() => {
            this.describe();
        });
    }
    //positions the shape in the div
    setPosition(top, left) {
        let positionTop = Math.floor(Math.random() * (600 - top)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - left)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
    }

    //gives shape info
    describe(width, height, radius, area, perimeter) {
        let shapeInfo = `Shape Name: ${this.name}<br>Width: ${this.width}<br>Height: ${this.height}<br>Radius: ${this.radius}<br>Area: ${this.area}<br>Perimeter: ${this.perimeter}`;
        $('#shapeInfo').html(shapeInfo);
    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = 'Circle';
        this.radius = radius;
        this.area = Math.PI * radius * radius;
        this.perimeter = 2 * Math.PI * radius;
        this.diameter = radius * 2;
        this.width = this.diameter;
        this.height = this.diameter;
        this.shape.addClass('circle');
        //creates the circle
        this.shape.css({ 'height': `${radius * 2}px`, 'width': `${radius * 2}px`, 'border-radius': '50%' });
        this.setPosition(radius * 2, radius * 2);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.name = 'Triangle';
        this.height = height;
        this.width = height;
        this.area = 0.5 * height * height;
        this.perimeter = 2 * height + Math.sqrt(2) * height;
        this.shape.addClass('triangle');
        //creates the triangle
        this.shape.css({ 'border-left': `${height / 2}px solid transparent`, 'border-right': `${height / 2}px solid transparent`, 'border-bottom': `${height}px solid yellow` });
        this.setPosition(height, height);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.perimeter = width * 2 + height * 2;
        this.shape.addClass('rectangle');
        //creates the rectangle
        this.shape.css({ 'height': `${height}px`, 'width': `${width}px` });
        this.setPosition(height, width);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.name = 'Square';
        this.width = sideLength;
        this.height = sideLength;
        this.area = sideLength * sideLength;
        this.perimeter = sideLength * 4;
        this.shape.addClass('square');
        //creates the square
        this.shape.css({ 'height': `${sideLength}px`, 'width': `${sideLength}px` });
        this.setPosition(sideLength, sideLength);
    }
}

//creates new shapes when these buttons are clicked
$('#squareBtn').click(function () {
    let sideLength = $('#sideLength').val();
    new Square(sideLength);
})

$('#rectangleBtn').click(function () {
    let width = $('#width').val();
    let height = $('#heightRectangle').val();
    new Rectangle(width, height);
})

$('#circleBtn').click(function () {
    let radius = $('#radius').val();
    new Circle(radius);
})

$('#triangleBtn').click(function () {
    let height = $('#heightTriangle').val();
    new Triangle(height);
})