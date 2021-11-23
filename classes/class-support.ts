// Class support in TS 

class Pt {
    // field declaration
    // public writeable property
    // ! below is a definite assignment assertion operator
    x!: number;
    y: number = 5;
    z!: string;

    constructor() {
        // this.z = 'Kamwokya'
        this.initZ('ken')
        
    }

    initZ(z: string) {
        this.z = z
    }
}



const pt = new Pt()
// console.log(typeof pt.x)
// console.log(pt)
// pt.y = 5
// console.log(pt)

// readonly 
class Greeter {
    readonly name : string;

    constructor(name: string) {
        this.name = name;
    }

    // changeName() {
    //     this.name = 'tie'
    // }
}

const gr = new Greeter('John')
// console.log(gr)

class Base {
    k = 5;
}

class Derived extends Base {
    constructor() {
        super()
        console.log(this.k)
    }
}


// methods 
class Person {
    age = 0;

    grow(): void;
    grow(newAge?: number): void {
        if(newAge) {
            this.age = newAge;
        }
        else {
            this.age += 1;
        }
    }
}

// Getters and setters 
class Broom {
    _length = 0;
    _width = 0;
    _count = 0;
    get length() { return this._length; }
    set length(newLength: number) { this._length = newLength; }
    get width() { return this._width; }
    get count() {
        return this._count;
    }
    set count(amt:  number | boolean | string) {
        let num = Number(amt)
        // Dont allow NaN, Infinity etc.
        if(Number.isFinite(num)) {
            this._count = num; 
            return;
        }
         else {
             console.log('Count not set because num is', num)
         }
    }
}

let br = new Broom()
// console.log(br)
// br.length = 5
// console.log(br)
// console.log(br.length)
// console.log(br.width)
// br.width = 5;

// br.count = 30
// console.log(br.count)
// br.count = 'df'
// console.log(br.count)

// Index signatures
class MyC {
    [s: string] : number | Date;
    // tm: Date;

    // setTime() {
    //     this.tm = new Date();
    // }
}


const my = new MyC();
my.dk = 523;
// my.rm = 'df'
console.log(my)
