import { Cat, Dog } from './ts-exp.js'
import type { Cat as Cat2, Dog as Dog2 } from './ts-exp.js'
import { minutes, Cat as Cat3 } from './ts-exp';

type Animals = Cat | Dog;

let an: Animals = { breed: 'lion', 'yearOfBirth': 2020 }
let dog2: Dog2 = { breeds: ['kenyan'], yearOfBirth: 2017 }

console.log('Animal', an)
console.log('dog2', dog2)

let c3 : Cat3 = { breed: 'leopard', yearOfBirth: 2020 }
console.log(c3, minutes)
