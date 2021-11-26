// Utility types 
// See: https://www.typescriptlang.org/docs/handbook/utility-types.html
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = { title: 'Villain', description: 'Omega', isComplete: true };
const updatedTodo1 = updateTodo(todo1, { description: 'Way too eary', isComplete: false });
// compile with tsc --strict flag
function logName(name) {
    console.log(name.firstName.toLowerCase());
    console.log(name.lastName.toUpperCase());
}
const p = { personId: 'P001', name: 'Mukasa',
    age: 23, gender: 'M', isMarried: true };
const logPerson = person => {
    console.log(person);
    // person.age = 3;
};
// logPerson(p) 
const roPerson = p;
function freez(obj) {
    return Object.freeze(obj);
}
let fr0 = { name: 'Gilbert' };
fr0.name = 'Titanic';
let fr1 = freez(fr0);
const cats = {
    miffy: { age: 52, breed: 'angarian' },
    borris: { age: 13, breed: 'german' },
    spasky: { age: 23, 'breed': 'tonado' }
};
var customers;
(function (customers) {
    customers[customers["JOHN"] = 0] = "JOHN";
    customers[customers["MARK"] = 1] = "MARK";
    customers[customers["RODNEY"] = 2] = "RODNEY";
})(customers || (customers = {}));
const invoices = {
    [customers.JOHN]: { amount: 204 },
    [customers.MARK]: { amount: 42 },
    [customers.RODNEY]: { amount: 200 }
};
// console.log(invoices)
const inv2 = {
    peter: { amount: 11 },
    simon: { amount: 22 },
};
inv2[4] = { amount: 83 };
// console.log(inv2)
const marks = {
    george: 200,
    gilbert: 340,
    mary: 512
};
const prev = { title: 'washing', completed: false };
const stod = { title: 'Trend', description: 'df', completed: true, frequency: 3 };
const ex = 'c';
const ex0 = 'd';
let e1 = 'age';
let t1 = 'caros';
// let s1 : NNStr = undefined;
function print2(data) {
    console.log(data);
}
// print2('maths')
// let num: number;
function getData() {
    if (Math.random() < 0.5)
        return 'prime minister';
}
// print2(getData())
// Parameters
function f2(name, age, ...others) {
    console.log('others are ', others);
}
let f2P = ['Miracle', 23, 'bread', 'butter'];
f2(...f2P);
let t0 = ['Something went wrong'];
let e = new Error(...t0);
// console.group('error logs')
// console.log(e)
// console.groupEnd()
// console.log('logged error')
class D1 {
    constructor(age, name, home) {
        this.age = age;
        this.name = name;
        this.home = home;
    }
}
let d1Args = [55, 'dan', 'sala'];
const d1 = new D1(...d1Args);
// console.log(d1)
// ReturnType
// construct s type with return type of function Type
function f3() {
    return {
        name: 'my f2 function',
        complexity: 'simple',
        invocations: 5
    };
}
let f3ReturnV = { name: 'queen', complexity: 'expert', 'invocations': 3 };
console.log(f3ReturnV);
let sr = 'movies';
let d1Inst = new D1(1, 'ddk', 'sk');
// ThisParameterType
// numToStr function will extract the this type from toHex
function toHex() {
    return this.toString(16);
}
// console.log(n.toHex())
function numToStr(n) {
    return toHex.apply(n);
}
let n = new Number(1535);
// console.log(n)
// console.log(numToStr(n))
// OmitThisParameter
// Remove this parameter from Type 
const fiveToHex = toHex.bind(100);
// console.log(fiveToHex())
// console.log(toHex.bind(500)())
function printSize(size) {
    console.log(this + ' - ' + size);
}
const prSize = printSize.bind('Grey');
prSize(53);
function makeObject(desc) {
    let data = desc.data || {};
    let methods = desc.methods || {};
    return Object.assign(Object.assign({}, data), methods);
}
let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx; // strongly typed this
            this.y += dy; // strongly typed this
        }
    }
});
console.log(obj);
obj.x = 10;
obj.y = 20;
obj.moveBy(30, 20);
// console.log(obj)
// string manipulation
let ku = 'MOVIE MAKER';
let kl = 'bring it on';
let lc = 'Potato chipS';
let lu = 'trust Ur Well';
console.log(ku, kl, lc, lu);
