/// <reference path='Validation.ts' />
namespace Validation {
    var numberRegex = /^[0-9]+$/;
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 3 && numberRegex.test(s) 
        }
    }
}