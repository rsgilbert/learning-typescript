// See: https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax
/// Exporting types
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.minutes = void 0;
    exports.minutes = 51;
});
