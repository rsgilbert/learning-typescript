/// <reference path="Validation.ts" />
/// <reference path="ZipCodeValidator.ts" />
/// <reference path="LettersOnlyValidator.ts" />
// Try out using the api


// Some samples to try on 
let samples = ['My great great mango', '141', 'Titu5', '1313', "Rodney"]

// Validators to use 
let validators: { [s: string]: Validation.StringValidator } = {}
// console.log(Validation)
// console.log(Validation.book)
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




