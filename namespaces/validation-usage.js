"use strict";
/// <reference path="Validation.ts" />
/// <reference path="ZipCodeValidator.ts" />
/// <reference path="LettersOnlyValidator.ts" />
// Try out using the api
exports.__esModule = true;
// Some samples to try on 
var samples = ['My great great mango', '141', 'Titu5', '1313', "Rodney"];
// Validators to use 
var validators = {};
// console.log(Validation)
// console.log(Validation.book)
validators["ZIP CODE"] = new Validation.ZipCodeValidator();
validators["NAME"] = new Validation.LettersOnlyValidator();
// Show whether each sample passed each validator
for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
    var s = samples_1[_i];
    for (var v in validators) {
        var isMatch = validators[v].isAcceptable(s);
        var status_1 = isMatch ? 'Successs' : 'Failed';
        console.log(status_1 + ": Sample " + s + ", validator: " + v);
    }
}
