{
    // describe fn
    function greeter2(fn) {
        fn('Hello');
    }
    function printStr(s) {
        console.log(s);
        return 8;
    }
    function greeter3(fn) {
        fn('Hi');
    }
    // greeter2(printStr)
    // greeter3(printStr)
}
// call signature 
{
    function tellMe(getIsUnderAge) {
        console.log(getIsUnderAge(12));
        console.log('description is', getIsUnderAge.desc);
    }
    function getIsUnderAge(age) {
        return age < 16;
    }
    getIsUnderAge.desc = 'too young';
    tellMe(getIsUnderAge);
}
// construct signatures
{
    function f1(ctor) {
        return new ctor("Pycharm");
    }
    function MyFn(k) {
        this.p = k;
    }
    // console.log(f1(MyFn))
}
// Generic functions
{
    function firstElement(arr) {
        return arr[0];
    }
    // Generics are used when we want to describe a 
    // correspondence between two values.
    function firstEl(arr) {
        return arr[0];
    }
    var s0 = firstEl(["gr", "k"]);
    var u0 = firstEl([1, 'f', undefined]);
    // standalone map
    function myMap(arr, func) {
        return arr.map(func);
    }
    var result = myMap([1, 2, 3, 4], function (i) { return String(Math.pow(i, 2)); });
    // console.log(result)
    var res2 = myMap(["a", "b"], function (s) { return s + "KK"; });
    // console.log(res2)
    function map2(arr, func) {
        return arr.map(func);
    }
    // const r2 = map2([2,3,4],  i => String(i ** 4))
}
// constraints 
// A constraint limits the kinds of types that a type can have
{
    // Constrain Type to have a length property
    function longest(a, b) {
        return a.length >= b.length ? a : b;
    }
    // console.log(longest([1,2], ["pi", "k", "game"]))
    var k = longest([1, 2], ["pi", "k", "game"]);
    var o1 = { length: 83, name: "P1" };
    var o2 = { length: 82, name: "P2" };
    // console.log(longest(o1, o2))
    // Doesnt work, common error
    // function minimumLength<Type extends { length: number }>(obj: Type, minimum: number) : Type {
    //     return obj.length < minimum 
    //         ? obj 
    //         : { length: minimum } 
    // }
    // specifying type arguments
    function combine(arr1, arr2) {
        return arr1.concat(arr2);
    }
    var arr = combine([1, 2, 3], ["a", "b"]);
    // console.log(arr)
    var arr2 = combine([1, 2, 3], [2, "a", "b"]);
    // console.log(arr2)
}
// Guidelines for writing good generic functions 
// push type parameters down
// Rule: when possible use the type parameter itself rather than constraining it
{
    //good
    function fn1(arr) {
        return arr[1];
    }
    //bad
    function fn2(arr) {
        return arr[2];
    }
    // good
    var a1 = fn1([3, 13, 5]);
    // bad
    var a2 = fn2([2, 3, 5]);
}
// Use fewer type parameters
// Always use as few type parameters as possilbe
{
    // good
    function filter1(arr, func) {
        return arr.filter(func);
    }
    // bad
    function filter2(arr, func) {
        return arr.filter(func);
    }
    // console.log(filter1([1,2,3], a => a % 2 === 0))
    // console.log(filter2([5,1, 9,2, 33,5], a => a % 3 === 0))
}
// optional parameters
{
    function f(n) {
        console.log(n.toFixed());
        console.log(n.toFixed(5));
    }
    // f(12)
    // f(2.3582499484)
    function f5(x) {
        console.log('x is', x);
    }
    // f5()
    // f5(532)
    // f5(null)
    // declare function f6(x?: number) : void;
    function f7(y) {
        console.log('y is ', y);
    }
    // f7(undefined)
}
{
    // Functions with fewere parameters (of the same types) can always take
    // the place of functions with more parameters
    function myForEach(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            // callback provides two arguments but the actual function implementation  may only
            // specify one parameter.
            callback(arr[i], i);
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
    function ak(k) {
        return "new Date()";
    }
    function makeDate(mOrTimestamp, d, y) {
        return new Date();
        //   if (d !== undefined && y !== undefined) {
        //     return new Date(y, mOrTimestamp, d);
        //   } else {
        //     return new Date(mOrTimestamp);
        //   }
    }
    function printAge(ageOrDob, isApproximate) {
        if (isApproximate) {
            return console.log("Approximate age is between " + (ageOrDob + 1) + " and " + (ageOrDob - 1));
        }
        switch (typeof ageOrDob) {
            case "number":
                return console.log('Age is strictly', ageOrDob);
            case "object":
                var age = new Date().getUTCFullYear() - ageOrDob.getUTCFullYear();
                return console.log("Age is calculated from db as", age);
            case "undefined":
                throw Error("age or dob is undefined");
            default:
                var _checkNever = ageOrDob;
        }
    }
    function len(x) {
        return x.length;
    }
    // console.log(len('good night'))
    // console.log(len([2, 3, "f"]))
}
{
    function CalcName(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
        this.getFullName = function () {
            return [this.firstName, this.lastName].join(" ");
        };
    }
    var name_1 = new CalcName('John', 'Rambo');
    // console.log('full name is', name.getFullName())
    // console.log(name)
}
{
    // other types
    function noop() {
        return;
    }
    var m = undefined;
    // let k : void = null;
    // console.log(Object.keys(noop))
    // console.log(Object.keys([70, 97, 08]))
    // unknown
    // unknown represents any value but its safer
    // because you cant do anything with an unknown value
    function d1(k) {
        // will give a typescript error
        // console.log(k.toString())
    }
    // d1("kamwokya")
    function p() { return 'kk'; }
    var mm = p();
    // never
    // Represents values which are never observed
    // Some functions never return a value
    function fail(msg) {
        throw Error(msg);
    }
    // fail('bye')
    // Function type
    var r = void 0;
    // let j : typeof p.bind
}
// Rest 
{
    // gather args
    function multiplyBy(n) {
        var m = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            m[_i - 1] = arguments[_i];
        }
        return m.map(function (mV) { return mV * n; });
    }
    // console.log(multiplyBy(3, 2, 5, 10)) // 6, 15, 30
    // console.log(multiplyBy(2, ...[1,2,3,4]))
    // In general, typescript doesnot assume that arrays are immutable
    // Use "as const" so the array is inferred as a 2-length type
    var tanArgs = [8, 5];
    // console.log(Math.atan2(...tanArgs))
}
// parameter destructuring
{
    function sum(_a) {
        var a = _a.a, b = _a.b, c = _a.c;
        console.log(a + b + c);
    }
    sum({ a: 2, b: 3, c: 5 });
}
// return type () => void doesnt force functions to NOT return sth
{
    var f1_1 = function () { return true; };
    var k = f1_1();
    console.log(k);
    var p_1 = k;
    console.log(p_1);
    var src = [12, 3, 4];
    var dst_1 = [0, 0];
    src.forEach(function (v) { return dst_1.push(v); });
    console.log(dst_1);
    // literal function definition
    // if it has a return type of void then it must return nothing
    function mustReturnNothing() {
        // not allowed
        // return 3
        return;
    }
    function mustNthng() {
        // @ts-expect-error
        return true;
    }
    var pp = mustNthng();
    console.log('pp is', pp);
    var canReturnSth = function canReturnSth() {
        if (Math.random() < 0.5)
            return;
        else
            return 10;
    };
    var j = canReturnSth();
    var canReturn = function () {
        if (Math.random() < 0.5)
            return;
        else
            return 10;
    };
}
