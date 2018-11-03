let shapeCounter = 1;

class Shape {
    //creates shape, gives it a name and id, appends it to div
    constructor() {
        this.name = `shape${shapeCounter}`;
        this.shape = $('<div>').attr('id', this.name);
        $('#shapeContainer').append(this.shape);

        shapeCounter++
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(name);
        this.radius = radius;
        let diameter = radius * 2;
        this.shape.addClass('circle');
        //creates the circle
        this.shape.css({ 'height': `${diameter}px`, 'width': `${diameter}px`, 'border-radius': '50%' });
        //positions the circle
        let positionTop = Math.floor(Math.random() * (600 - diameter)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - diameter)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
        //adds info to sidebar
        let area = Math.PI * radius * radius;
        let perimeter = 2 * Math.PI * radius;
        let shapeInfo = `Shape Name: circle<br>Width: ${diameter}<br>Height: ${diameter}<br>Radius: ${radius}<br>Area: ${area}<br>Perimeter: ${perimeter}`;
        $('#shapeInfo').html(shapeInfo);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(name);
        this.height = height;
        this.shape.addClass('triangle');
        //creates the triangle
        this.shape.css({ 'border-left': `${height / 2}px solid transparent`, 'border-right': `${height / 2}px solid transparent`, 'border-bottom': `${height}px solid yellow` });
        //positions the triangle
        let positionTop = Math.floor(Math.random() * (600 - height)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - height)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
        //adds info to sidebar
        let area = 0.5 * height * height;
        let perimeter = 2 * height + Math.sqrt(2) * height;
        let shapeInfo = `Shape Name: triangle<br>Width: ${height}<br>Height: ${height}<br>Radius: N/A<br>Area: ${area}<br>Perimeter: ${perimeter}`;
        $('#shapeInfo').html(shapeInfo);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(name);
        this.width = width;
        this.height = height;
        this.shape.addClass('rectangle');
        //creates the rectangle
        this.shape.css({ 'height': `${height}px`, 'width': `${width}px` });
        //positions the rectangle
        let positionTop = Math.floor(Math.random() * (600 - height)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - width)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
        //adds info to sidebar
        let area = width * height;
        let perimeter = width * 2  + height * 2;
        let shapeInfo = `Shape Name: rectangle<br>Width: ${width}<br>Height: ${height}<br>Radius: N/A<br>Area: ${area}<br>Perimeter: ${perimeter}`;
        $('#shapeInfo').html(shapeInfo);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(name);
        this.sideLength = sideLength;
        this.shape.addClass('square');
        //creates the square
        this.shape.css({ 'height': `${sideLength}px`, 'width': `${sideLength}px` });
        //positions the square
        let positionTop = Math.floor(Math.random() * (600 - sideLength)) + 1;
        let positionLeft = Math.floor(Math.random() * (600 - sideLength)) + 1;
        this.shape.css({ 'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px` });
        //adds info to sidebar
        let area = sideLength * sideLength;
        let perimeter = sideLength * 4;
        let shapeInfo = `Shape Name: square<br>Width: ${sideLength}<br>Height: ${sideLength}<br>Radius: N/A<br>Area: ${area}<br>Perimeter: ${perimeter}`;
        $('#shapeInfo').html(shapeInfo);
    }
}

//creates new shapes when these buttons are clicked
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