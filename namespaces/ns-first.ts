// Namespaces - first steps
// See: https://www.typescriptlang.org/docs/handbook/namespaces.html#first-steps

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    
    let lettersRegex = /^[A-Za-z]+$/;
    let numberRegex = /^[0-9]+$/;
    
    
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegex.test(s);
        }
    }
    
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 3 && numberRegex.test(s) 
        }
    }
}


// Some samples to try on 
let samples = ['Hello', '256', 'Que3n', '2455']

// Validators to use 
let validators: { [s: string]: Validation.StringValidator } = {}

validators["ZIP CODE"] = new Validation.ZipCodeValidator();
validators["NAME"] = new Validation.LettersOnlyValidator();

// Show whether each sample passed each validator

for(let s of samples) {
    for(let v in validators) {
        let isMatch = validators[v].isAcceptable(s);
        let status = isMatch ? 'Successs' : 'Failed'
        console.log(`${status}: Sample ${s}, validator: ${v}`)
    }
}



export {}

