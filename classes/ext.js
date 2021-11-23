class Animal {
    #name;
    constructor(name) {
        this.#name = name; 
    }

    speak() {
        console.log(`${this.#name} is speaking`)
    }

    shout() {
        console.log('Animal', this.getName, 'is shouting')
    }

    get getName() { return this.#name; }
}

class Dog extends Animal {
    //constructor(name) {
        // call superclass constructor
        //super(name)
    // }

    speakLoudly() {
        console.log(this.getName, 'is speaking Very loudly')
    }
    // override
    shout() {
        console.log('The dog', this.getName, 'is shouting')
    }
}

let a = new Animal('Antelope')
// a.speak()
// a.shout()

let g = new Dog('Garry')
// g.speak()
// g.speakLoudly()
// g.shout()

// Extending traditional based functions 
function Ant(size) {
    this.size = size || 1;
}

Ant.prototype.grow = function() {
    this.size ++;
}

Ant.prototype.getSize = function() {
    return this.size
}


class RedAnt extends Ant {
    constructor(size) {
        super(size || 10)
    }
    #color;
    dye(color) {
        this.#color = color;
    }

    get getColor() { return this.#color }
}


const an = new Ant(5)
// console.log(an)
// an.grow()
// console.log(an.getSize())

const ra = new RedAnt()
// console.log(ra)
// ra.grow()
// ra.grow()
// console.log(ra.getSize())
// ra.dye('blue')
// console.log(ra.getColor)

// Inherit from regular object

const Computer = {
    setRam(ram) {
        this.ram = ram;
    },
    print() {
        console.log(this)
    }
}

class Laptop {
    constructor(size) {
        this.size = size;
    }
}

Object.setPrototypeOf(Laptop.prototype, Computer)

const l = new Laptop(13)
// console.log(l)
// l.print()
// l.setRam('8GB')
// console.log('l is', l)
// l.print()

// Species
// Helps you override default constructor
class MyArray extends Array {
    // overwrite species to the parent Array constructor 
    static get [Symbol.species]() { return Array; }
}

let ar = new MyArray(1,2,3)
let mapped = ar.map(x => x + 5)
// console.log(mapped instanceof MyArray)
// console.log(mapped instanceof Array)
 
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} speaking`)
    }
}

class Lion extends Cat { 
    speak() {
        super.speak()
        console.log(`${this.name} roaring`)
    }
}

class Leopard extends Cat { 
    speak() {
        super.speak()
        console.log(`${this.name} doesnt roar`)
    }
}

let lion = new Lion('makanze')
let leopard = new Leopard('fasterriza')

// lion.speak()
// leopard.speak()

// Mix-ins 
// let calcMixin = Base => class extends Base {
//     calc() {}
// }



// Redeclaring a class is not allowed
// class Lion { 
//     die(){}
// }

// but we can use class 
Lion = class {
    run() { console.log('running')}
}

let l2 = new Lion()
l2.run()


class Base {
    k = 5;
}

class Derived extends Base {
    constructor() {
        super()
        console.log(this.k)
    }
}

// let d = new Derived()