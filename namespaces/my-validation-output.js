var Validation;
(function (Validation) {
    Validation.book = 5;
})(Validation || (Validation = {}));
/// <reference path='Validation.ts' />
var Validation;
(function (Validation) {
    var numberRegex = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 3 && numberRegex.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts"/>
var Validation;
(function (Validation) {
    var lettersRegex = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegex.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
/// <reference path="ZipCodeValidator.ts" />
/// <reference path="LettersOnlyValidator.ts" />
// Try out using the api
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
