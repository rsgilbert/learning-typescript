
{
    // describe fn
    function greeter2(fn: (a: string) => void) {
        fn('Hello')
    }

    function printStr(s: never) {
        console.log(s)
        return 8
    }

    type GreetFn = (k: string) => void 

    function greeter3(fn: GreetFn) {
        fn('Hi')
    }
    

    // greeter2(printStr)
    // greeter3(printStr)
}

// call signature 
{
    type IsUnderrAgeFn = {
        desc: string;
        (age: number) : boolean
    }

    function tellMe(getIsUnderAge: IsUnderrAgeFn) {
        console.log(getIsUnderAge(12))
        console.log('description is', getIsUnderAge.desc)
    }

    function getIsUnderAge(age: number) {
        return age < 16
    }
    getIsUnderAge.desc = 'too young'

    tellMe(getIsUnderAge)
}

// construct signatures
{
    // constructors are functions invoked with the new 
    // keyword. They usually create a new object.
    type FnConstructor = {
        new (s: string): void
    }
    function f1(ctor: FnConstructor) {
        return new ctor("Pycharm")
    }

    function MyFn(k: string) {
        this.p = k
    }

    // console.log(f1(MyFn))

}

// Generic functions
{
    function firstElement(arr: any[]) {
        return arr[0]
    }

    // Generics are used when we want to describe a 
    // correspondence between two values.
    function firstEl<Type>(arr: Type[]) : Type | undefined {
        return arr[0]
    }
    const s0 = firstEl(["gr", "k"])
    const u0 = firstEl([1, 'f', undefined])

    // standalone map
    function myMap<Input, Output>(arr: Input[], func: (arg0: Input) => Output) : Output[] {
        return arr.map(func)
    }
    const result = myMap([1,2,3,4], i => String(i ** 2))
    // console.log(result)

    const res2 = myMap<string, string>(["a", "b"], s => s + "KK")
    // console.log(res2)

    function map2(arr: any[], func: (i: any) => any) {
        return arr.map(func)
    }

    // const r2 = map2([2,3,4],  i => String(i ** 4))

}

// constraints 
// A constraint limits the kinds of types that a type can have
{
    // Constrain Type to have a length property
    function longest<Type extends { length: number }>(a: Type, b: Type) {
        return a.length >= b.length ? a : b
    }
    // console.log(longest([1,2], ["pi", "k", "game"]))
    let k = longest([1,2], ["pi", "k", "game"])
    const o1 = { length: 83, name: "P1" }
    const o2 = { length: 82, name: "P2" }
    // console.log(longest(o1, o2))

    // Doesnt work, common error
    // function minimumLength<Type extends { length: number }>(obj: Type, minimum: number) : Type {
    //     return obj.length < minimum 
    //         ? obj 
    //         : { length: minimum } 
    // }

    // specifying type arguments

    function combine<Type>(arr1: Type[], arr2: Type[]) : Type[] {
        return arr1.concat(arr2)
    }

    const arr = combine<string|number>([1,2,3], ["a", "b"])
    // console.log(arr)

    const arr2 = combine([1,2,3], [2, "a", "b"])
    // console.log(arr2)
    
}

// Guidelines for writing good generic functions 

// push type parameters down
// Rule: when possible use the type parameter itself rather than constraining it

{
    //good
    function fn1<Type>(arr: Type[]) {
        return arr[1]
    }
    //bad
    function fn2<Type extends any[]>(arr: Type) {
        return arr[2]
    }

    // good
    const a1 = fn1([3,13,5])
    // bad
    const a2 = fn2([2,3,5])
}

// Use fewer type parameters
// Always use as few type parameters as possilbe
{
    // good
    function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) : Type[] {
        return arr.filter(func)
    }

    // bad
    function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func) : Type[] {
        return arr.filter(func)
    }

    // console.log(filter1([1,2,3], a => a % 2 === 0))
    // console.log(filter2([5,1, 9,2, 33,5], a => a % 3 === 0))
}

// optional parameters
{
    function f(n: number) {
        console.log(n.toFixed())
        console.log(n.toFixed(5))
    }
    // f(12)
    // f(2.3582499484)

    function f5(x?: number) {
        console.log('x is', x)
    }
    // f5()
    // f5(532)

    // f5(null)


// declare function f6(x?: number) : void;

    function f7(y?: string) {
        console.log('y is ', y)
    }
    // f7(undefined)

}

{
    // Functions with fewere parameters (of the same types) can always take
    // the place of functions with more parameters
    function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
        for(let i = 0; i < arr.length; i++) {
            // callback provides two arguments but the actual function implementation  may only
            // specify one parameter.
            callback(arr[i], i)
        }
    }
    // myForEach([12,5,1,2], (v, idx) => {
    //      console.log('v is', v, 'indx is', idx)
    //      console.log(idx.toFixed())
    // })
    // extra arguments are simply ignored
    // myForEach([12,5,1,2], function(v) { console.log('v is', v, 'args', arguments) });

    // [1,2,23,4].forEach(function(v){ console.log(arguments)})
}

// function overloads
{

    function ak(): string;
    function ak(k?: number): string {
        return "new Date()";
    }

    function makeDate(timestamp: number): Date;
    function makeDate(m: number, d: number, y: number): Date;
    function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
        return new Date()
    //   if (d !== undefined && y !== undefined) {
    //     return new Date(y, mOrTimestamp, d);
    //   } else {
    //     return new Date(mOrTimestamp);
    //   }
    }
    // print age 
    function printAge(age: number): void;
    function printAge(dob: Date): void;
    function printAge(age: number, isApproximate: true) : void;
    function printAge(ageOrDob?: number | Date, isApproximate?: boolean) : void
    // function printAge(dob: Date, currentDate: Date, useConsole: boolean): void 
    {
        if(isApproximate){
            return console.log(`Approximate age is between ${ageOrDob as number + 1} and ${ageOrDob as number - 1}`)
        }
        switch(typeof ageOrDob) {
            case "number":
                return console.log('Age is strictly', ageOrDob)
            case "object":
                const age = new Date().getUTCFullYear() - ageOrDob.getUTCFullYear()
                return console.log("Age is calculated from db as", age)
            case "undefined":
                throw Error("age or dob is undefined")
            default:
                const _checkNever : never = ageOrDob;
        }


    }

    // printAge(new Date())
    // printAge(8, true)
    // printAge(24)
    // printAge(9)

    // This len overloaded function cant be called on a union of array and string
    function len(s: string): number;
    function len(arr: any[]) : number;
    function len(x: any) {
        return x.length;
    }
    
    // console.log(len('good night'))
    // console.log(len([2, 3, "f"]))

}

{
    // declaring this

    type Name = { firstName: string, lastName: string, getFullName: () => string }
    
    function CalcName(this: Name, fName: string, lName: string, ) {
        this.firstName = fName;
        this.lastName = lName;
        this.getFullName = function(this: Name) {
            return [this.firstName, this.lastName].join(" ")
        }
    }

    const name: Name = new CalcName('John', 'Rambo')
    // console.log('full name is', name.getFullName())
    // console.log(name)

}

{
    // other types
    function noop() {
        return
    }
    let m: void = undefined;
    // let k : void = null;
    // console.log(Object.keys(noop))
    // console.log(Object.keys([70, 97, 08]))

    // unknown
    // unknown represents any value but its safer
    // because you cant do anything with an unknown value
    function d1(k: unknown) {
        // will give a typescript error
        // console.log(k.toString())
    }
 
    // d1("kamwokya")

    function p(): unknown { return 'kk'}
    let mm = p()

    // never
    // Represents values which are never observed
    // Some functions never return a value
    function fail(msg: string) : never {
        throw Error(msg)
    }
    // fail('bye')

    // Function type
    let r : Function 
    // let j : typeof p.bind
  
}

// Rest 
{
    // gather args
    function multiplyBy(n: number, ...m: number[]) {
        return m.map(mV => mV * n)
    }
    // console.log(multiplyBy(3, 2, 5, 10)) // 6, 15, 30
    // console.log(multiplyBy(2, ...[1,2,3,4]))

    // In general, typescript doesnot assume that arrays are immutable
    // Use "as const" so the array is inferred as a 2-length type
    const tanArgs = [8,5] as const;
    // console.log(Math.atan2(...tanArgs))
}

// parameter destructuring
{
    function sum({ a, b, c}: {a: number, b: number, c: number}) {
        console.log(a + b + c)
    }
    sum({ a: 2, b: 3, c: 5})
}

// return type () => void doesnt force functions to NOT return sth
{
    

    const f1 : () => void = () => true 

    let k: void = f1()
    console.log(k)
    let p: boolean = k as unknown as boolean
    console.log(p)

    const src = [12,3,4]
    const dst = [0,0]
    src.forEach(v => dst.push(v))
    console.log(dst)

    // literal function definition
    // if it has a return type of void then it must return nothing
    function mustReturnNothing() : void {
        // not allowed
        // return 3
        return;
    }

    function mustNthng() :void {
        // @ts-expect-error
        return true;
    }
    let pp = mustNthng()
    console.log('pp is', pp)

    const canReturnSth: () => void = function canReturnSth() {
        if(Math.random() < 0.5)
            return;
        else return 10
    }
    let j = canReturnSth()

    const canReturn : () => void = () => {
        if(Math.random() < 0.5)
            return;
        else return 10
    }
}