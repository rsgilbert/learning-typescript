// Namespaces - first steps
// See: https://www.typescriptlang.org/docs/handbook/namespaces.html#first-steps


interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegex = /^[A-Za-z]+$/;
let numberRegex = /^[0-9]+$/;


class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegex.test(s);
    }
}


class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 3 && numberRegex.test(s) 
    }
}

// Some samples to try on 
let samples = ['Hello', '256', 'Que3n', '2455']

// Validators to use 
let validators: { [s: string]: StringValidator } = {}

validators["ZIP CODE"] = new ZipCodeValidator();
validators["NAME"] = new LettersOnlyValidator();

// Show whether each sample passed each validator

for(let s of samples) {
    for(let v in validators) {
        let isMatch = validators[v].isAcceptable(s);
        let status = isMatch ? 'Successs' : 'Failed'
        console.log(`${status}: Sample ${s}, validator: ${v}`)
    }
}

export {}




