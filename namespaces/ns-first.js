// Namespaces - first steps
// See: https://www.typescriptlang.org/docs/handbook/namespaces.html#first-steps
var Validation;
(function (Validation) {
    let lettersRegex = /^[A-Za-z]+$/;
    let numberRegex = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegex.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 3 && numberRegex.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// Some samples to try on 
let samples = ['Hello', '256', 'Que3n', '2455'];
// Validators to use 
let validators = {};
validators["ZIP CODE"] = new Validation.ZipCodeValidator();
validators["NAME"] = new Validation.LettersOnlyValidator();
// Show whether each sample passed each validator
for (let s of samples) {
    for (let v in validators) {
        let isMatch = validators[v].isAcceptable(s);
        let status = isMatch ? 'Successs' : 'Failed';
        console.log(`${status}: Sample ${s}, validator: ${v}`);
    }
}
export {};
