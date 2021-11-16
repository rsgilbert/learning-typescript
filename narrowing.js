// Narrowing
{
    function padLeft(padding, input) {
        if (typeof padding === 'number') {
            return " ".repeat(padding) + input;
        }
        return padding + input;
    }
    function padRight(strs) {
        if (typeof strs === "object") {
            if (strs !== null) {
                console.log('was object');
                for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                    var s = strs_1[_i];
                    console.log(s);
                }
            }
        }
    }
    // padRight(null)
}
{
    // truthiness
    if (false ? false : true) {
        // console.log('inside')
    }
    // infer type
    // inferred to literal type (cuz of !!)
    var t1 = !!8;
    // infered to boolean type
    var b1 = Boolean(8);
    // no overlap
    // if(t1 === false) {
    //     console.log('fal')
    // }
    // else console.log('tr')
    // if(b1 === false) {
    //     console.log('fal')
    // }
    // else console.log('tr')
    // Equality narrowing
    function eqNarrowing(sn, nb) {
        if (sn === nb) {
            console.log(sn.toFixed(3));
        }
        else {
            console.log(sn);
        }
    }
    // eqNarrowing(3, 3)
    // eqNarrowing(5,2)
    // eqNarrowing("2", 2)
    function checkNull(a) {
        if (a != null) {
            console.log(a.toFixed(2));
        }
    }
    checkNull(undefined);
}
{
    function act(letter) {
        if ("nerve" in letter) {
            console.log('Letter is', letter.word);
            if ("bones" in letter) {
                console.log("age is", letter.age);
            }
        }
        else {
            console.log(letter.gender);
        }
    }
    // act({ nerve: false, bones: 3, word: 1, age: 9 })
}
// instanceof
{
    function logValue(x) {
        if (x instanceof Date) {
            console.log(x.getTime());
        }
        else {
            console.log(x.length);
        }
    }
    //     logValue("Kamulalit")
    // logValue(new Date())
}
{
    // Assignments
    var x = Math.random() < 0.5 ? 10 : "None";
    console.log('x is', x);
    // x = false;
    x = "Jack";
    // other
    var y = void 0;
    if (Math.random() < 0.5) {
        y = 5;
    }
    else {
        y = false;
    }
    //  console.log(y)
}
// Analysis of code based on reachability is called Control Flow Analysis.
// Control flow analysis
{
    function ex() {
        var v;
        // make v a boolean
        v = false; // Math.random() < 0.8;
        if (v) {
            v = "Came";
        }
        else {
            v = 82;
        }
        return v;
    }
}
// type predicates
{
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    // console.log(isFish({ fly: () => {}}))
    // console.log(isFish({ swim: () => {}}))
    var p = { swim: function () { return 88; } };
    // if(isFish(p)) {
    //     console.log(p, 'is fish')
    // }
    // else {
    //     console.log(p, 'is not a fish')
    // }
    function getSmallPet() {
        return Math.random() < 0.5
            ? { swim: function () { return console.log('swiming'); }, float: "fl" }
            : { fly: function () { return console.log('flying'); }, nest: 8 };
    }
    var pet = getSmallPet();
    // isFish(pet) ?
    //     pet.swim()
    //     :
    //     pet.fly()
    var zoo = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()];
    var fishes = zoo.filter(isFish);
    var birds = zoo.filter(function (animal) { return !isFish(animal); }); //animal => !isFish(animal)) as Bird[]
    // console.log('fishes', fishes)
    // console.log('birds', birds)
}
// Discriminated unions
{
    function handleShape(shape) {
        // oops
        // if(shape.kind === 'd')
    }
    function getArea(shape) {
        if (shape.kind === 'circle')
            return Math.PI * Math.pow(shape.radius, 2);
    }
    var getArea2 = function (shape) {
        function isCircle(shape) {
            return shape.kind === "circle";
        }
        // if(isCircle(shape)) {
        if (shape.kind === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);
        }
        return shape.sideLength * 4;
    };
    var c2 = { kind: 'circle', radius: 2 };
    var area2 = getArea2(c2);
    // console.log('circle 2 area is', area2)
    function getArea_Switch(shape) {
        switch (shape.kind) {
            case "square":
                return 4 * shape.sideLength;
            case "circle":
                return Math.PI * Math.pow(shape.radius, 2);
        }
    }
    // console.log(getArea_Switch({ kind: 'square', sideLength: 20 }))
}
{
    // never type
    function reachNever(e) {
        if (typeof e !== 'string') {
            if (typeof e !== 'number') {
                console.log('e is', e);
                if (typeof e !== 'boolean') {
                    console.log('reached never. e is', e);
                }
            }
        }
    }
    // reachNever(null)
    function printSize(size) {
        switch (size) {
            case 1:
                console.log('size is 1');
                break;
            case 2:
                console.log('size is 2');
                break;
            case 3:
                console.log('size is 3');
                break;
            default:
                // just static analysis to ensure we've covered every possibility
                // If we left out a possible case we'll get an error fom typescript saying
                // type number is not assignable to type never.
                var _exhaustiveCheck = size;
        }
    }
    printSize(1);
    printSize(3);
}
