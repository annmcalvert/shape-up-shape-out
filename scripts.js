let shapeCounter = 1;

class Shape {
    constructor() {
        this.name = `shape${shapeCounter}`;
        this.shape = $('<div>').attr('id', this.name);
        $('#div').append(this.shape);

        shapeCounter++
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(name);
        this.radius = radius;
        let diameter = radius * 2;

        this.shape.addClass('circle');
        this.shape.css({ 'height': `${diameter}px`, 'width': `${diameter}px`, 'border-radius': '50%' });

        let positionTop = Math.floor(Math.random() * (600 - diameter)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - diameter)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(name);
        this.height = height;

        this.shape.addClass('triangle');
        this.shape.css({ 'border-left': `${height / 2}px solid transparent`, 'border-right': `${height / 2}px solid transparent`, 'border-bottom': `${height}px solid yellow` });

        let positionTop = Math.floor(Math.random() * (600 - height)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - height)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(name);
        this.width = width;
        this.height = height;


        this.shape.addClass('rectangle');
        this.shape.css({ 'height': `${height}px`, 'width': `${width}px` });

        let positionTop = Math.floor(Math.random() * (600 - height)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - width)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(name);
        this.sideLength = sideLength;

        this.shape.addClass('square');
        this.shape.css({ 'height': `${sideLength}px`, 'width': `${sideLength}px` });

        let positionTop = Math.floor(Math.random() * (600 - sideLength)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - sideLength)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
    }
}

$('#squareBtn').click(function () {
    let sideLength = $('#sideLength').val();
    let square = new Square(sideLength);
})

$('#rectangleBtn').click(function () {
    let width = $('#width').val();
    let height = $('#heightRectangle').val();
    let rectangle = new Rectangle(width, height);
})

$('#circleBtn').click(function () {
    let radius = $('#radius').val();
    let circle = new Circle(radius);
})

$('#triangleBtn').click(function () {
    let height = $('#heightTriangle').val();
    let triangle = new Triangle(height);
})