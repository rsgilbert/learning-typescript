const h = "Hi dear"

console.log(h.toLowerCase())

// This is an industrial-grade general-purpose greeter function
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

greet('Jonah', new Date())
// greet('Peter', 23)
console.log(Date())
console.log(new Date())

function f12(age) : any {
    console.log('Age is', age.ain)
}

const k : null | string = f12(3)
console.log(k.toString())