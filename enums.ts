// Using enums 
// See: https://www.typescriptlang.org/docs/handbook/enums.html
export {}

enum Direction {
    Up = 1,
    Down, // will be 2
    Left = 1,
    Right //will be 2
}

// console.log(Direction.Down)
// console.log(Direction)

enum Hands {
    Right,
    Left
}

// console.log(Hands)
// console.log(Hands.Right)
// console.log(Hands[1])

function f1() { 
    // return 'func one'
    // return 23;
    return Math.random()
}

enum F {
    f0,
    F1 = f1(),
    F2 = f1(),
    F3 = Math.random(),
    f4 = 21.442,
    f5,
    f6,
}
// console.log(F)

// sTRING ENUMS 
// Must have initializers
// They do not create mirror string values on the generated object
// Can not be used with computed values, booleans or objects
enum Location {
    Home = 'Bwaise',
    Work = 'Gulu',
    Educ = 'Kyambadde',
    Bwaise = 'Tie',
    Leisure = 8,
    Awake = 42.38,
    Keny = 8
}

// console.log(Location)
// console.log(typeof Location.Awake)

enum Loc2 {
    home = Location.Home,
    ed = Location.Educ
}

// console.log(Loc2) 

enum FileAccess {
    // Constant members
    None,
    Read = 1 << 2,
    Write = 2 << 1,
    ReadWrite = Read | Write,
    G = -9

}
// console.log(FileAccess)

enum Action {
    Sleep = 2,
    Drink = 3,
    Both = Sleep | Drink
}

// console.log(Action)


// literal enum members

// Here enum members become types as well 
 

enum ShapeKind {
    Circle,
    Square
}

interface Circle {
    kind: ShapeKind.Circle,
    radius: number
}

interface Square {
    kind: ShapeKind.Square, 
    sideLength: number 
}

let c : Circle = {
    // kind: 0,
    kind: ShapeKind.Circle,
    radius: 4
}

// console.log(c)

enum Count {
    zero,
    one,
    two
}

// for literal enum members, the enum becomes a type itself
function tell(num: Count) {
    switch(num) {
        case Count.zero:
            console.log('zero here')
            break;

        case Count.one:
            console.log('one found')
            break;

        case Count.two: 
            console.log('two found')
            break;
        
        default:
            // can help catch fallthrough bugs
            const _exhaust : never = num;
            console.error('exhausted', _exhaust)
    }
}


// tell(2)
// tell(Count.one)
// tell(5)

// enums at runtime
// enums are real object at runtime 
// they can be passed to functions 
type F1Parameter = { age: number }
function f1Log(par: F1Parameter) {
    console.log(par)
}

enum Person2 { age = 52, gender = 'Male' }
// f1Log(Person2)

// enums at compile time
// use keyof typeof to get a type with Enum keys 

enum LogLevel {
    ERROR, 
    WARN, 
    INFO, 
    DEBUG
}

// Gets you what the enum values have in common
type LogLevelStrings_1 = keyof LogLevel;
type LogLevelStrings_2 = typeof LogLevel;
type LogLevelStrings_3  = keyof typeof LogLevel;

// let l : LogLevelStringsAll = LogLevel.DEBUG;
let l2 : LogLevelStrings_2 = LogLevel;
let l3 : LogLevelStrings_3 = 'ERROR'

let sides : keyof typeof Direction = 'Left';
let loc : keyof typeof Location = 'Awake'
let f : keyof typeof F = 'f0'
// console.log(l2, l3, sides, loc, f)

enum Drink {
    Hard = 1.5,
    Soft = 0.5,
    Other = Soft - 3
}

// Reverse mapping. Enum values to enum names.
// Get enum name ('Hard')
// console.log(Drink[Drink.Hard])

// const enums

// Constant enums are completely removed during compilation.
const enum Tooth {
    MOLAR = 3,
    SCIZZOR,
    PREMOLAR = 2,
    CANNINE = 4,
    INISSOR = CANNINE * 2,
    BABY
}

// console.log('baby', Tooth.BABY)
// console.log('premolar', Tooth.PREMOLAR)
// console.log('scizzor', Tooth.SCIZZOR)
// console.log('inc', Tooth.INISSOR)

// let tth : keyof typeof Tooth = "BABY";
// console.log(tth)
// console.log(Location)

// ambient enums

declare enum Location { 
    A = 1, B
}

// console.log(Location)


// using object as enum
const Week = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: undefined
} //as const;

// console.log(Week.Wednesday)

function logF2(w: typeof Week[keyof typeof Week]) {
    console.log('w is', w)
}

logF2(Week.Tuesday)