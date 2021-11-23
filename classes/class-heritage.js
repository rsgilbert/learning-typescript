// Class Heritage 
// See: https://www.typescriptlang.org/docs/handbook/2/classes.html#class-heritage
class Sonar {
    ping() {
        console.log('pinging');
    }
}
// Note that implements clause is only a check that the 
// class can be treated as the interface type.
class Ball {
    ping() { console.log('ball pinged'); }
    kick() { return 'Kicking'; }
    volley(h, d) {
        console.log('volleyed to height', h, 'and distance', d);
    }
}
let b = new Ball();
// b.volley(5, 220)
// Overriding methods 
class Base {
    // super: string  = 'Sup';
    greet() {
        // this.super = "dk"
        console.log('Hello sir');
    }
}
class Derived extends Base {
    greet(name) {
        if (name) {
            console.log('Hello', name);
        }
        else {
            super.greet();
            console.log('derived');
        }
    }
}
const d = new Derived();
// d.greet('Sam')
// d.greet()
let bd = new Derived();
// will call overridden mtd
// bd.greet();
// Initialization order
class B {
    name = 'base';
    constructor() {
        // console.log('My name is', this.name)
        // return { 
        //     name: 'Jaja'
        // }
    }
}
class DerivedB extends B {
    twin = 'derived b';
    name = 'der b';
}
const derB1 = new DerivedB();
// console.log(derB1)
// console.log(derB1)
class MsgError extends Error {
    constructor(m) {
        super(m);
    }
    sayHi() {
        console.log('Hi');
    }
}
let me = new MsgError('bad bad');
// me.sayHi()
// console.log(me.message)
class Cry {
    eyelashes = 100;
    eyes = 2;
    cryOut() {
        console.log('crying');
    }
    // protected is visible to subclasses
    getLoudness() {
        return 1;
    }
}
class CD extends Cry {
    checkEyelashes() {
        console.log(this.eyelashes);
    }
}
class CryLoud extends Cry {
    // eyes = super.eyes;
    eyes = 4;
    getLoudness = super.getLoudness;
    shout() {
        console.log('shouting', this.getLoudness());
        console.log('eyes are', this.eyes);
    }
    compareEyelashes(otherCry) {
        // console.log(otherCry.eyelashes)
    }
}
const c = new Cry();
// c.cryOut()
const cl = new CryLoud();
// cl.shout()
// console.log(cl.getLoudness())
// console.log(cl.eyes)
class Ba {
    x = 0;
    constructor() {
        this.x = 4;
    }
    checkX(ba) {
        // cross instance access
        return ba.x === this.x;
    }
}
class DBa extends Ba {
    constructor() {
        super();
    }
}
const ba0 = new Ba();
const ba1 = new Ba();
console.log(ba0.checkX(ba1));
// typescript's private is soft private
console.log(ba1['x']);
// Javascript's private fields (#) are hard private
class Snail {
    #speed = 0;
    tick = 4;
    constructor() {
        this.#speed = 55;
    }
}
const sn = new Snail();
console.log(sn['#speed']);
console.log(sn['tick']);
