// Static members
// See: https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members

class A {
    private static x = 10;
    static print() {
        console.log(A.x)
    }
    static z  = 'ddk'
}

// console.log(A.x)
// A.print()
// console.log(A['x'])
// console.log(A)
class DerA extends A {
    // static name = 'jaguar'
    // static length = 'd'
    static y = 50;
}

// DerA.print()
// console.log(DerA.y)
// console.log(DerA['x'])
// console.log(DerA)
// console.log(Object.getPrototypeOf(DerA))
// console.log(DerA.length)
// console.log(DerA.name)


// static blocks

// This class will need a higher version of TSC to compile. Sth like tsc version 4.4.4
class B {
    static #count = 0;
    static get count() {
        return B.#count;
    }

    // initialization block
    static {
        const amount = 54;
        B.#count = amount;
        
    }
}

// console.log(B.count)

// Generic classes 
class C<T> {
    contents: T;
    // static members cant refer to class's type parameters 
    // static others : T;
    constructor(value: T) {
        this.contents = value;
    }
}

const cc = new C('trickstar')
// console.log(cc)

class D {
    name = 'D'
    getName() { return this.name; }
    // below function wont be part of super
    getNameArrow = () => this.name;

}

class DerD extends D {
    name = 'Senior'
    derivedArrow = () => {
        console.log(super.getName())
        // console.log(this.getNameArrow())
        // console.log(super.getNameArrow())
    }
}

const c = new D();

const ob = { name: 'my object', getName: c.getName, arrow: c.getNameArrow }

// console.log(c.getName())
// console.log(ob.getName())
// let gn = c.getName
// gn()

// Arrow
// console.log('**arrow')
// console.log(c.getNameArrow())
// console.log(ob.arrow())
// let gna = c.getNameArrow
// console.log(gna())

const derd = new DerD()
let da = derd.derivedArrow
// da()
// derd.derivedArrow()

class E {
    name = 'I am E'

    // Add a this parameter to method definition to 
    // statically enforce that the method is called correctly
    getName(this: E) {
        console.log(this.name);
    }
}

class DerE extends E {
    name = "I am derived E"
    getNameD() {
        super.getName();
    }
}

const e = new E();
const gn = e.getName

// below wont work
// gn();

let gn2 = gn.bind(e);
// gn2();

let de = new DerE()
// de.getNameD()
// let deb = de.getNameD.bind(de)
// deb()

class F {
    contents: string = ''
    set (value: string) {
       this.contents = value;
       return this;
    }
    sameAs(other: this) {
        console.log('other', other.contents, 'this', this.contents)
        return other.contents === this.contents;
    }
}

class DerF extends F {
    clear()  {
        this.contents = '';
    }
}

// let f = new F()
// f.set()

const df = new F()
const dfs = df.set('water melon')
// console.log(dfs)
// const dfa = df.clear()

const df2 = new DerF();
// console.log(df2)
// console.log(df.sameAs(df2))

// below wont work
// console.log(df2.sameAs(df))


class Something  {
    value?: string;
    hasValue() : this is { value: string } {
        return this.value !== undefined;
    }

    setValue(v: string) { this.value = v; }

    isS1() : this is S1 {
        return this instanceof S1;
    }
    isS2() : this is S2 {
        return this instanceof S2;
    }
    isS3() : this is S3 {
        return this instanceof S3;
    }
    isS33() : this is S33 {
        return this instanceof S33
    }
}

class S1 extends Something {
    one() { console.log('one') }
}
class S2 extends Something {
    two() { console.log('two') }
}

class S3 extends Something {
    three() { console.log('three') }
}
class S33 extends S3 {
    thirtyThree() { console.log('thirty three') }
}



// let sth = new Something()
function getSth() : Something {
    return new S33()
}

let sth = getSth()

if(sth.isS1()) {
    sth.one()
}
else if(sth.isS2()) {
    sth.two()
}
// left out else clause
if(sth.isS3()) {
    sth.three()
}
if(sth.isS33()) {
    sth.thirtyThree()
}
else {
    console.log('just sth')
}

// console.log(sth.value.toLowerCase())

sth.setValue('pOtAtO')
// if(sth.hasValue()) {
//     console.log(sth.value.toLowerCase())
// }

// else console.log('has no value')


class H<T> {
    v?: T
    constructor(v?: T){
        this.v = v;
    }
    print(o: this) {
        console.log(o)
    }
}

const h = new H();
// h.v = 'strong'
// console.log(h.v)
// h.v = 5;
// console.log(h.v)

// // let hn = new H(4)
// h.print(new H(88))


// Parameter properties
class Params {
    private tornado = 'weee'
    constructor(
        private journal: string,
        protected cage: boolean,
        public readonly v: number,
        public congo: string
    ) {
        // No body necessary
    }
}

const p = new Params('my j', false, 52, 'DRC')
// console.log(p)
// console.log(p.congo)

// Class expressions 

const someC = class {
    content = 'tt'
}

console.log(someC)
console.log(new someC())

// abstract classes 

abstract class AbsI {
    abstract getName() : string;
    printName() {
        console.log('Hello, name is', this.getName())
    }
}

class DerI extends AbsI {
    getName() {
        return 'oop is awesome'
    }
}


const di = new DerI();
// di.printName()

// Create instance of class derives from abstract class 

// Below wont work
// function greet(ctor: typeof AbsI) {
//     const inst = new ctor();
// }

// We write a function that accepts sth with a construct signature 
function greet(ctor: new () => AbsI) {
    const inst = new ctor();
    inst.printName();
}

// greet(DerI);
// greet(AbsI);

let DI2 = DerI;

// In most cases classes are compared structurally
class K1 {
    x = 5;
    print() {console.log('hi')}
}

class K2 { 
    x = 8;
    y = 4;
    dr() {}
    print() { console.log('k2 printing')}
}

const k0 : K1 = new K2();
k0.print()

// subtype relationships exist even without explicit inheritence 
class Person {
    name?: string 
    queen?: () => void;
}

class Emp {
    name?: string;
    age?: number;
    queen() {}
}

const pers : Person = new Emp();
console.log(pers)

// a type with no members is generally a supertype of anything else
class Em {}
function f1(e: Em) {
    console.log('empty', e)
}

f1({})
f1('trust')