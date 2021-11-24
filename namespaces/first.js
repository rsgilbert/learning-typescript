// Namespaces - first steps
// See: https://www.typescriptlang.org/docs/handbook/namespaces.html#first-steps
var lettersRegex = /^[A-Za-z]+$/;
var numberRegex = /^[0-9]+$/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegex.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 3 && numberRegex.test(s);
    };
    return ZipCodeValidator;
}());
// Some samples to try on 
var samples = ['Hello', '256', 'Que3n', '2455'];
// Validators to use 
var validators = {};
validators["ZIP CODE"] = new ZipCodeValidator();
validators["NAME"] = new LettersOnlyValidator();
// Show whether each sample passed each validator
for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
    var s = samples_1[_i];
    for (var v in validators) {
        var isMatch = validators[v].isAcceptable(s);
        var status_1 = isMatch ? 'Successs' : 'Failed';
        console.log(status_1 + ": Sample " + s + ", validator: " + v);
    }
}

