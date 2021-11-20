// Template literal types 
// See: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

import { type } from "os";

type World = "world";

type Greeting = `hello ${World}`

let g: Greeting = 'hello world'

type country_id = `${'us'|'ug'|'ke'}_id`

let usId : country_id = 'us_id';

let ugId : country_id = 'ug_id'

type doingWord = `${string}ing`

let crying: doingWord = 'singing and crying'

let someIng : doingWord = 'clapping';

type numIdMiddle = 0 | 1 | 2;
type randomLastChar = 'X' | 'Y' | 'Z'

type UserId = `U${numIdMiddle}${numIdMiddle}${randomLastChar}`

let gilbertUserId: UserId = 'U20X'

// String unions in Types 

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>(eventName: `${string & keyof Type}ChangedRightNow`, callback: (newValue: Type[Key]) => void) : void;
}

function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type> {
    let watchedObj: Type & PropEventSource<Type> = Object.assign({
        on: (eventName: any, callback: any) => {
            callback(88)
        }
    }, obj)
    return watchedObj
}

const watchedPerson = makeWatchedObject({
    firstName: 'Tim',
    lastName: "Jack",
    class: 'P4',
    sick: false,
    marks: 100
})

// watchedPerson.on('marksChangedRightNow', (newValue) => {
//     console.log('marks changed to', newValue)
// })


// watchedPerson.on('firstNameChangedRightNow', newValue => {
//     console.log('first name changed right now to', newValue)
// })

// watchedPerson.on('sickChangedRightNow', (newValue) => {
//     console.log('sick', newValue)
// })

// watchedPerson.on('classChangedRightNow', newValue => {
//     console.log('class', newValue)
// })

// Intrisic string manipulation types 

// Uppercase
type greet = "Hello there"
type ShoutyGreet = Uppercase<greet>

let sg: ShoutyGreet = 'HELLO THERE'

type MyId = `100_${Uppercase<'a'|'b'|'c'>}`

let greatId : MyId = '100_A'
let greatId2 : MyId = '100_B'

type AsciiKeys = 'a'|'b'|'c'|'d'
type MinorId = `x102${string}${Lowercase<AsciiKeys>}`

let mId : MinorId = 'x102a'
let mId2 : MinorId = 'x102122d'
let mId3 : MinorId = 'x102aldkfjDIc'

// Capitalize
type capitalized = Capitalize<`${AsciiKeys}${AsciiKeys}`>

let c1 : capitalized = 'Bd';

type uncapitalized = Uncapitalize<capitalized>
let uc1 : uncapitalized = 'ab'




