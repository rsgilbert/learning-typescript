// let o : any = { name: 'Gilbert 2' }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let t: number = o.name 
// console.log(t)
// // parameter type annotations 
// function greet(name: string, isMature: boolean) : number {
//     console.log('Hello', name, 'maturity status is', isMature)
//     return 1
// }
// greet('Jon', false)
// const calcDate: (() => Date) = () => {
//     return new Date()
// }
// console.log(calcDate())
// anonymous functions 
// const names: number[] = [/*"jon", "ron", "peter",*/ 2]
// // Contextual typing for function
// names.forEach(function(s: string) {
//     console.log(s.toExponential())
// })
// object types 
// function printPoint(pt: { x: number; y: number }) {
//     console.log('point is', pt)
// }
// printPoint({ x: 4, y: 1})
// function printO(o: {a; b?: string, c}) {
//     console.log(o)
//     const age: string = o.b.toString()
// }
// printO({ a :3, c: 'Gr'})
var printId = function (id) {
    if (typeof id === "string") {
        console.log('string id is', id.toUpperCase());
    }
    else if (Array.isArray(id)) {
        console.log("First id is", id[0]);
    }
    else {
        console.log("number id is", id.toPrecision());
    }
};
/*
printId(124)
printId("gr102")
printId(["ab", "kk"])

function getFirst2(x: number[] | string) {
    console.log(x.slice(0, 2))
}

getFirst2([1,4,6,10,12])
getFirst2('strandend')

{
    // Type aliases
    type s = string;

    let nam: s = "Jonh";
    nam = "kd"

    type a = { b: number }

    let o : a = { b: 4 }

    type IDType = number | string;

    type s2 = string;

    let b: s2 = "queen";
    nam = b;
}
*/
// interfaces 
{
    function printP(p) {
        console.log(p);
    }
    // printP({  })
}
// Extending types and aliases
{
    var chimp = { name: "kalo" };
    var z = { z: 22, x: 3, y: 4 };
    var h = __assign(__assign({}, z), { age: 3, name: 'sam' });
    // type W = {}
}
// type assertions
// Use type assertions to specify a more specific type
{
    // let can = <number>"23";
    // console.log(can)
    // let c = "3" as number;
    var printAge = function (age) {
        var p = age.toExponential();
        console.log(p);
        var p2 = age.toExponential();
        console.log(p2);
    };
    // printAge(3)
}
// literal types
{
    var changing = "Hello";
    var unchanging = "Grey";
    var hi = "hi";
    hi = "hi";
    function printDirection(direction) {
        console.log(direction);
    }
    // printDirection("east")
    // printDirection("left")
    function compare(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    }
    // console.log(compare("Ge", "jo"))
    var bigger = compare("abc", "xyz");
    function logFinger(finger) {
        console.log('Finger is', finger);
    }
}
{
    var r = { url: "tie", method: "GET" };
    var r2 = { url: "http://", method: "POST" };
    function handleRequest(r) {
        console.log('r is ', r);
    }
    // handleRequest(r2 as Request);
    var r3 = { url: "http://", method: "POST", kite: { name: "Kite" } };
    // r3.url = 'd'
    // r3.kite.name  = "J"
    // handleRequest(r3)
}
{
    // null and undefined
    // strictNullChecks on
    function doSth(word) {
        if (word === null) {
            return;
        }
        console.log(word.toUpperCase());
    }
    // doSth('hi you')
    function liveDangerously(x) {
        // no error
        // Uses ! as the non-null assertion operator
        console.log(x.toFixed(3));
    }
    // liveDangerously(142)
    // liveDangerously(null)
}
{
    // bigint
    var oneHun = BigInt(100);
    // console.log(oneHun)
    // console.log(oneHun * oneHun)
    var firstName = Symbol("name");
    var lastName = Symbol("name");
    console.log(firstName, lastName);
    console.log(typeof firstName);
    console.log(typeof firstName === typeof lastName);
    // console.log(firstName == lastName)
}
