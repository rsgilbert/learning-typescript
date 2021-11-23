// Class support in TS 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pt = /** @class */ (function () {
    function Pt() {
        this.y = 5;
        // this.z = 'Kamwokya'
        this.initZ('ken');
    }
    Pt.prototype.initZ = function (z) {
        this.z = z;
    };
    return Pt;
}());
var pt = new Pt();
// console.log(typeof pt.x)
// console.log(pt)
// pt.y = 5
// console.log(pt)
// readonly 
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    return Greeter;
}());
var gr = new Greeter('John');
// console.log(gr)
var Base = /** @class */ (function () {
    function Base() {
        this.k = 5;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this) || this;
        console.log(_this.k);
        return _this;
    }
    return Derived;
}(Base));
// methods 
var Person = /** @class */ (function () {
    function Person() {
        this.age = 0;
    }
    Person.prototype.grow = function (newAge) {
        if (newAge) {
            this.age = newAge;
        }
        else {
            this.age += 1;
        }
    };
    return Person;
}());
// Getters and setters 
var Broom = /** @class */ (function () {
    function Broom() {
        this._length = 0;
        this._width = 0;
        this._count = 0;
    }
    Object.defineProperty(Broom.prototype, "length", {
        get: function () { return this._length; },
        set: function (newLength) { this._length = newLength; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Broom.prototype, "width", {
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Broom.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (amt) {
            var num = Number(amt);
            // Dont allow NaN, Infinity etc.
            if (Number.isFinite(num)) {
                this._count = num;
                return;
            }
            else {
                console.log('Count not set because num is', num);
            }
        },
        enumerable: false,
        configurable: true
    });
    return Broom;
}());
var br = new Broom();
// console.log(br)
// br.length = 5
// console.log(br)
// console.log(br.length)
// console.log(br.width)
// br.width = 5;
// br.count = 30
// console.log(br.count)
// br.count = 'df'
// console.log(br.count)
// Index signatures
var MyC = /** @class */ (function () {
    function MyC() {
    }
    return MyC;
}());
var my = new MyC();
my.dk = 523;
// my.rm = 'df'
console.log(my);
