// Utility types 
// See: https://www.typescriptlang.org/docs/handbook/utility-types.html

// partial 
// Sets all properties to optional 

interface Todo {
    title: string,
    description: string,
    isComplete?: boolean
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) : Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = { title: 'Villain', description: 'Omega', isComplete: true }
const updatedTodo1 = updateTodo(todo1, { description: 'Way too eary', isComplete: false })
// console.log(updatedTodo1)

// required
// set to all properties to required
type Name = { firstName?: string, lastName?: string }
// compile with tsc --strict flag
function logName(name: Required<Name>) {
    console.log(name.firstName.toLowerCase())
    console.log(name.lastName.toUpperCase())
}
// logName({ firstName: 'Jeff', lastName: 'Simmons' })


// readonly
// Set all properties to readonly 
interface Person {
    personId: string,
    name: string,
    age: number,
    gender: 'M' | 'F',
    isMarried: boolean,
    husband?: Person,
    wife?: Person
}

const p : Person = { personId: 'P001', name: 'Mukasa',
    age: 23, gender: 'M', isMarried: true }

const logPerson : (person: Readonly<Person>) => void 
    = person => {
    console.log(person)
    // person.age = 3;
} 
// logPerson(p) 

const roPerson : Readonly<Person> = p 

function freez<Type>(obj: Partial<Type>) : Readonly<Partial<Type>> {
    return Object.freeze(obj)
}
let fr0 = { name: 'Gilbert' }
fr0.name = 'Titanic'
let fr1 = freez<{ name: string, age: number }>(fr0)
// console.log(fr1)
// fr0.name = 'Titanic'
// console.log(fr0, fr1)

// fr1.name = 'fd'


// Record
// Helps you describe the type of keys and values of an object.
interface CatInfo {
    age: number,
    breed: string;
}

type CatName = 'miffy' | 'borris' | 'spasky'

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 52, breed: 'angarian' },
    borris: { age: 13, breed: 'german' },
    spasky: { age: 23, 'breed': 'tonado' }   
}
// console.log(cats)

interface InvoiceInfo {
    amount: number
}

enum customers { JOHN, MARK, RODNEY }

const invoices: Record<customers, InvoiceInfo> = {
    [customers.JOHN] : { amount: 204 },
    [customers.MARK] : { amount: 42 },
    [customers.RODNEY] : { amount: 200 }
}
// console.log(invoices)

const inv2 : Record<string, InvoiceInfo> = {
    peter: { amount: 11 },
    simon: { amount: 22 },
}
inv2[4] = { amount: 83 }
// console.log(inv2)

const marks : Record<string, number> = {
    george: 200,
    gilbert: 340,
    mary: 512
}
// console.log(marks)


// pick 
interface Tod { 
    title: string,
    description: string,
    completed: boolean,
    detailedDescription: string,
    frequency: number,
    createdOn: Date
}

type TodPreview = Pick<Tod, 'title' | 'completed'>

const prev : TodPreview = {title: 'washing', completed: false }
// console.log(prev)

type ShortTod = Omit<Tod, 'detailedDescription' | 'createdOn' >
const stod : ShortTod = { title: 'Trend', description: 'df', completed: true , frequency: 3}
// console.log(stod)

type Ex0 = Exclude<'a' | 'b' | 'c' | 'd'| 'e', 'a' | 'b'>
const ex : Ex0 = 'c'
const ex0 : Ex0 = 'd'

type Ex1 = Exclude<string | number | (() => void), number | Function>
let e1 : Ex1 = 'age'

// Extract 
// Constructs a type by extracting all union members assignable to Union 
type T1 = Extract<'drink'|'chocolate'|'museum'|'caros', 'caros'|'choco'|'perfume'|'drink'>
let t1 : T1 = 'caros'

// Nonnullable
// Extracts null and undefined from type

type NNStr = NonNullable<string | number | undefined>
// let s1 : NNStr = undefined;
function print2<T>(data: NonNullable<T>) {
    console.log(data)
}
// print2('maths')
// let num: number;

function getData() { 
    if(Math.random() < 0.5) return 'prime minister'
}

// print2(getData())

// Parameters
function f2(name: string, age: number, ...others: string[]){
    console.log('others are ', others)
}

type f2Par = Parameters<typeof f2>
let f2P: f2Par = ['Miracle', 23, 'bread', 'butter']
f2(...f2P);

// ConstructorParameters
// Create tuple type from constructor function type 
type T0 = ConstructorParameters<ErrorConstructor>
let t0 : T0 = ['Something went wrong']

let e : Error = new Error(...t0)
// console.group('error logs')
// console.log(e)
// console.groupEnd()
// console.log('logged error')

class D1 {
    constructor(public age: number, public name: string, private home: string){
        
    }
}

// const d1 = new D1(10, 'mark', 'kule')
// console.log(d1)
type D1ConArgs = ConstructorParameters<typeof D1>
let d1Args: D1ConArgs = [55, 'dan', 'sala']
const d1 = new D1(...d1Args)
// console.log(d1)


// ReturnType
// construct s type with return type of function Type
function f3() {
    return {
        name: 'my f2 function',
        complexity: 'simple',
        invocations: 5
    }
}

type F3Ret = ReturnType<typeof f3>
let f3ReturnV : F3Ret = { name: 'queen', complexity: 'expert', 'invocations': 3 }
console.log(f3ReturnV)

type SimpRet = ReturnType<() => string>
let sr : SimpRet = 'movies'

// InstanceType
// constructs type made of instance type of a constructor function type

type D1Inst = InstanceType<typeof D1>
let d1Inst : D1Inst = new D1(1, 'ddk', 'sk');

type AnyInst = InstanceType<any>

// ThisParameterType
// numToStr function will extract the this type from toHex
function toHex(this: Number) {
    return this.toString(16)
}

// console.log(n.toHex())

function numToStr(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n)
}

let n = new Number(1535)
// console.log(n)
// console.log(numToStr(n))

// OmitThisParameter
// Remove this parameter from Type 
const fiveToHex : OmitThisParameter<typeof toHex> = toHex.bind(100)
// console.log(fiveToHex())
// console.log(toHex.bind(500)())

function printSize(this: string, size: number) {
    console.log(this + ' - ' + size)
}
const prSize: OmitThisParameter<typeof printSize> 
    = printSize.bind('Grey')
prSize(53)


// ThisType
type ObjectDescriptor<D,M> = {
    data?: D,
    methods?: M & ThisType<D & M>; // type of 'this' in methods is D & M
}

function makeObject<D,M>(desc: ObjectDescriptor<D,M>): D & M {
    let data : object = desc.data || {}
    let methods : object = desc.methods || {}
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // strongly typed this
            this.y += dy; // strongly typed this
        }
    }
})
console.log(obj)
obj.x = 10
obj.y = 20 
obj.moveBy(30, 20)
// console.log(obj)

// string manipulation
let  ku : Uppercase<'MovIe maker'> = 'MOVIE MAKER'
let kl : Lowercase<'Bring IT On'> = 'bring it on'
let lc : Capitalize<'potato chipS'> = 'Potato chipS'
let lu : Uncapitalize<'Trust Ur Well' = 'trust Ur Well'
console.log(ku, kl, lc, lu)