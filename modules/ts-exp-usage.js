(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ts-exp"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var ts_exp_1 = require("./ts-exp");
    var an = { breed: 'lion', 'yearOfBirth': 2020 };
    var dog2 = { breeds: ['kenyan'], yearOfBirth: 2017 };
    console.log('Animal', an);
    console.log('dog2', dog2);
    var c3 = { breed: 'leopard', yearOfBirth: 2020 };
    console.log(c3, ts_exp_1.minutes);
});
