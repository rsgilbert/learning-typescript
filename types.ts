// let o : any = { name: 'Gilbert 2' }

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

const printId = (id: number | string | string[]) => {
    if(typeof id === "string") {
        console.log('string id is', id.toUpperCase())
    }
    else if(Array.isArray(id)) {
        console.log("First id is", id[0])
    }
    else {
        console.log("number id is", id.toPrecision())
    }
}
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
    interface P {
        a: number
    }

    function printP(p: P) {
        console.log(p)
    }
    // printP({  })
}

// Extending types and aliases
{
    // extending interfaces
    interface Animal {
        name: string
    }

    interface Human extends Animal {
        age: number;
    }   

    let chimp : Animal = { name: "kalo" }
    // console.log(chimp)

    // let mark : Human = { name: "Mark", age: 2}
    // console.log(mark); 

    // extending types
    type OneD = { x: number };
    type TwoD = OneD & { y: number }
    type ThreeD = TwoD & { z: number }
    type FourD = ThreeD & Human;
    const z : ThreeD = { z: 22, x: 3, y: 4}
    const h : FourD = { ...z, age: 3, name : 'sam'}
    // console.log(z)
    // console.log(h)

    // // Adding new fields to an interface
    // interface Car {
    //     wheels: number
    // }
    // interface Car {
    //     seats: number
    // }
    // let c: Car = {wheels: 3, seats: 2 }
    // console.log(c)

    // You cant add fields to a type alias 
    type W = { letter : string }
    // type W = {}
 
}

// type assertions
// Use type assertions to specify a more specific type
{
    // let can = <number>"23";
    // console.log(can)

    // let c = "3" as number;
    const printAge = (age : number | string) => {
        let p = (age as number).toExponential()
        console.log(p);
        let p2 = (<number><any>age).toExponential()
        console.log(p2)
    };
    // printAge(3)
}

// literal types
{
    let changing = "Hello"
    const unchanging = "Grey"
    
    let hi : "hi" = "hi"
    hi = "hi"

    function printDirection(direction: "left" | "right" | "center") {
        console.log(direction)
    }
    // printDirection("east")
    // printDirection("left")

    function compare(a: string, b: string) : -1 | 0 | 1 {
        return a === b ? 0 : a > b ? 1 : -1
    }
    // console.log(compare("Ge", "jo"))
    const bigger : 0 | -1 | 1 | 4 | 2 = compare("abc", "xyz")
    // console.log(bigger)

    interface Finger {
        count: 1 | 2 | 3 | 4 | 5
    }

    function logFinger(finger: Finger | "no-finger") {
        console.log('Finger is', finger)
    }
    // logFinger({ count: 3 })
    // logFinger("no-finger")
    // logFinger({ count: 1 })

    type b = true ;
}

{
    // literal inference
    type Request = { url: string, method: "GET" | "POST" }
    const r: Request = { url: "tie", method: "GET" }
    
    const r2 = { url: "http://", method: "POST" }


    function handleRequest(r: Request) {
        console.log('r is ', r)
    }
    // handleRequest(r2 as Request);

    let r3 = { url: "http://", method: "POST", kite: { name: "Kite"} } as const
    // r3.url = 'd'
    // r3.kite.name  = "J"
    // handleRequest(r3)
}

{
    // null and undefined
    // strictNullChecks on
    function doSth(word: string | null) {
        if(word === null) {
            return
        }
        console.log(word.toUpperCase());
    }
    // doSth('hi you')

    function liveDangerously(x?: number | null) {
        // no error
        // Uses ! as the non-null assertion operator
        console.log(x!.toFixed(3))
    }
    // liveDangerously(142)
    // liveDangerously(null)
}

{
    // bigint
    const oneHun : bigint = BigInt(100)
    // console.log(oneHun)
    // console.log(oneHun * oneHun)

    const firstName = Symbol("name")
    const lastName = Symbol("name")
    console.log(firstName, lastName)
    console.log(typeof firstName)
    console.log(typeof firstName === typeof lastName)
    // console.log(firstName == lastName)
}
