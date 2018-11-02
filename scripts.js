let shapeCounter = 1;

class Shape {
    constructor() {
        this.name = `shape${shapeCounter}`;
        
     

        shapeCounter++
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(name);
        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(name);
        this.height = height;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(name);
        this.sideLength = sideLength;
        let square = $('<div>').attr('id', this.name);
        square.addClass('square');
        square.css({'height': `${sideLength}px`, 'width': `${sideLength}px`});

        let positionTop = Math.floor(Math.random() * 600) + 1; 
        let positionLeft = Math.floor(Math.random() * 600) + 1;
        console.log(positionTop);
        console.log(positionLeft);
        square.css({'margin-top': `${positionTop}px`, 'margin-left': `${positionLeft}px`});

        $('#div').append(square);
        console.log('square');
        

    }
}

$('#squareBtn').click(function() {
    
    let sideLength = $('#sideLength').val();
    let square = new Square(sideLength);
    console.log(sideLength);
})