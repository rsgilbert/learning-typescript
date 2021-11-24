/// <reference path="Validation.ts"/>
namespace Validation {
    let lettersRegex = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegex.test(s);
        }
    }
}
