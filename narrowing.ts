// Narrowing
{
    function padLeft(padding: number | string, input: string) : string {
        if(typeof padding === 'number') {
            return " ".repeat(padding) + input;        
        }
        return padding + input;
    }

    function padRight(strs: string | Array<string> | null) {
        if(typeof strs === "object") {
            if(strs !== null) {
                console.log('was object')
                for(const s of strs) {
                    console.log(s)
                }
            }
            
        }
    }
    // padRight(null)
}
{
    // truthiness
    if(false ? false : true) {
        // console.log('inside')
    }

    // infer type
    // inferred to literal type (cuz of !!)
    const t1 = !!8;
    // infered to boolean type
    const b1 = Boolean(8);

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
    function eqNarrowing(sn: string | number, nb: number | boolean) {
        if(sn === nb) {
            console.log(sn.toFixed(3))
        }
        else {
            console.log(sn)
        }
    }
    // eqNarrowing(3, 3)
    // eqNarrowing(5,2)
    // eqNarrowing("2", 2)

    function checkNull(a: number | null | undefined) {
        if(a != null) {
            console.log(a.toFixed(2))
        }
    }
    checkNull(undefined)
}

{
    // in operator narrowing 
    type F = { nerve: true, bloodcells: number, word: string }
    type G = { gender: "Male" | "Female" }
    type H = { nerve: boolean, bones: number, word: number, age: number }

    function act(letter: F | G | H) {
        if("nerve" in letter) {
            console.log('Letter is', letter.word)
            if("bones" in letter) {
                console.log("age is", letter.age)
            }
        }
        else {
            console.log(letter.gender)
        }
    }
    // act({ nerve: false, bones: 3, word: 1, age: 9 })
}

// instanceof
{
    function logValue(x : Date | string) {
        if(x instanceof Date) {
            console.log(x.getTime())
        }
        else {
            console.log(x.length)
        }
    }
//     logValue("Kamulalit")
// logValue(new Date())
}

{
    // Assignments
let x = Math.random() < 0.5 ? 10 : "None";
console.log('x is', x)
// x = false;
x = "Jack"

// other
let y 
if(Math.random() < 0.5) {
y = 5
}
 else {
     y = false;
 }
//  console.log(y)
}


// Analysis of code based on reachability is called Control Flow Analysis.
// Control flow analysis
{
    function ex() : number | string {
        let v : string | boolean | number;

        // make v a boolean
        v = false; // Math.random() < 0.8;

        if(v) {
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
    type Fish = { swim : () => void, float: string }
    type Bird = { fly: () => void, nest: number }
    function isFish(pet) : pet is Fish  {
        return (pet as Fish).swim !== undefined;
    }
    // console.log(isFish({ fly: () => {}}))
    // console.log(isFish({ swim: () => {}}))

    const p = { swim: () => 88 }
    // if(isFish(p)) {
    //     console.log(p, 'is fish')
        
    // }
    // else {
    //     console.log(p, 'is not a fish')
    // }
    function getSmallPet() : Fish | Bird {
        return Math.random() < 0.5 
            ? { swim: () => console.log('swiming'), float: "fl" }
            : { fly: () => console.log('flying'), nest: 8 }
    }

    const pet = getSmallPet()
    // isFish(pet) ?
    //     pet.swim()
    //     :
    //     pet.fly()
    
    const zoo : (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()]
    const fishes : Fish[] = zoo.filter(isFish)
    const birds: Bird[] = zoo.filter(function(animal): animal is Bird { return !isFish(animal) })//animal => !isFish(animal)) as Bird[]
    // console.log('fishes', fishes)
    // console.log('birds', birds)
}

// Discriminated unions
{   
    // encode shapes
    interface Shape {
        kind: "circle" | "square";
        radius?: number;
        sideLength?: number;
    }            
    
    function handleShape(shape: Shape) {
        // oops
        // if(shape.kind === 'd')
    }

    function getArea(shape: Shape) {
        if(shape.kind === 'circle') 
            return Math.PI * shape.radius! ** 2;
    }
    // const c : Shape = { kind: 'circle', radius: 2 }
    // let area = getArea(c)
    // console.log('circle area is', area)

    // another swing at defining shape
    interface Circle {
        kind: "circle",
        radius: number
    }

    interface Square {
        kind: "square",
        sideLength: number 
    }

    // Shape2 is a discriminated union.
    // A discriminated union is a union type where each type in the union
    // contains a common property with a literal type.
    type Shape2 = Square | Circle

    const getArea2 = (shape: Shape2) => {
        function isCircle(shape: Shape2) : shape is Circle  {
            return shape.kind === "circle"
        }
        // if(isCircle(shape)) {
        if(shape.kind === "circle") {
            return Math.PI * shape.radius ** 2;
        }
        return shape.sideLength * 4;
    }

    const c2 : Shape2 = { kind: 'circle', radius: 2 }
    let area2 = getArea2(c2)
    // console.log('circle 2 area is', area2)

    function getArea_Switch(shape: Shape2) {
        switch(shape.kind) {
            case "square": 
                return 4 * shape.sideLength;
            case "circle":
                return Math.PI * shape.radius ** 2;
        }
    }
    // console.log(getArea_Switch({ kind: 'square', sideLength: 20 }))

}

{
    // never type
    function reachNever(e: string | number | boolean) {
        if(typeof e !== 'string') {
            if(typeof e !== 'number') {
                console.log('e is', e)
                if(typeof e !== 'boolean') {
                    console.log('reached never. e is', e)
                }
            }
        }
    }
    // reachNever(null)

    function printSize(size: 1 | 2 | 3) {
        switch(size) {
            case 1: 
                console.log('size is 1')
                break;
            case 2: 
                console.log('size is 2')
                break;
            case 3: 
                console.log('size is 3')
                break;
            default: 
                // We check to ensure that size is of type never at this point.
                // just static analysis to ensure we've covered every possibility
                // If we left out a possible case we'll get an error fom typescript saying
                // type number is not assignable to type never.
                const _exhaustiveCheck : never = size 
        }
    }
    printSize(1)
    printSize(3)
}