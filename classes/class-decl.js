// Classes in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Classes are a template for creating objects. 

// creating classes using class declarations


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let r = new Rectangle(200, 50)
// console.log(r)
// console.log(typeof Rectangle) 

// creating classes using class expressions

// unnamed 
let Rec2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.n = Rec2.name;
    }
}

// console.log(Rec2)
let r2 = new Rec2(1, 2)
// console.log(r2)
// console.log(Rec2.name) // undefined


// named 
let Rec3 = class MyRec3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.n = MyRec3.name;
        this.n2 = Rec3.name // MyRec3
    }
}

let r3 = new Rec3(2, 2);
// console.log('r3 1', r3)
// console.log(Rec3.name)

// Prototype methods 

class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea()
    }

    // Method 
    calcArea() {
        return this.height * this.width
    }
}

let sq = new Rectangle2(5, 5)
// console.log(sq.area)
// console.log(sq.calcArea())


// Generator methods

class Polygon {
    constructor(...sides) {
        this.sides = sides
    }

    // Method 
    *getSides() {
        for(const side of this.sides) {
            yield side;
        }
    }
}

const pentagon = new Polygon(5, 2, 1, 5, 3)
// console.log([...pentagon.getSides()])

// Static methods and properties 
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // static displayName = "POINT";

    static distance(p1, p2) {
        const dx = p1.x - p2.x 
        const dy = p1.y - p2.y
        // calculate and return hypotenuese
        return Math.hypot(dx, dy)
    }
}

const p1 = new Point(5, 6)
const p2 = new Point(2, 3)
// console.log(p1, p2)
// console.log(Point.displayName)
// console.log(Point.distance(p1, p2))


// Binding this with prototype and static methods

// class Animal {
//     speak() {
//         return this
//     }
//     static eat() {
//         return this;
//     }
// }

// let o = new Animal()
// console.log(o.speak())
// let sp = o.speak
// console.log(sp())
// console.log(Animal.eat()) // class Animal
// let ea = Animal.eat 
// console.log(ea())

// Rewriting Animal class using traditional function-based syntax in non-strict mode 
function Animal() {}

Animal.prototype.speak = function() { return this; }
Animal.eat = function() { return this; }

// let a1 = new Animal()
// console.log(a1.speak()) // Animal {}
// let sp = a1.speak 
// console.log(sp()) // global this

// function t() {
//     console.log(this)
// }
// t()


// public field declarations 

class Rect {
    // public fields
    height = 4;
    width = 2;

    // private fields 
    #color = 'gray';

    constructor(h, w, color) {
        if(h !== undefined) {
            this.height = h
        }
        if(w !== undefined) {
            this.width = w;
        }
        this.#color = color;
    }
    get color() { return this.#color }

}

Rect.drink = function() { console.log('I am drinking')}

let rect1 = new Rect(5, undefined, 'pink')
console.log(rect1)
console.log(rect1.width)
console.log(rect1.height)
console.log(rect1.color)
// Rect.drink()

