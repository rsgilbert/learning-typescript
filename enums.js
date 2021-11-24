"use strict";
exports.__esModule = true;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Right"] = 2] = "Right"; //will be 2
})(Direction || (Direction = {}));
// console.log(Direction.Down)
// console.log(Direction)
var Hands;
(function (Hands) {
    Hands[Hands["Right"] = 0] = "Right";
    Hands[Hands["Left"] = 1] = "Left";
})(Hands || (Hands = {}));
// console.log(Hands)
// console.log(Hands.Right)
// console.log(Hands[1])
function f1() {
    // return 'func one'
    // return 23;
    return Math.random();
}
var F;
(function (F) {
    F[F["f0"] = 0] = "f0";
    F[F["F1"] = f1()] = "F1";
    F[F["F2"] = f1()] = "F2";
    F[F["F3"] = Math.random()] = "F3";
    F[F["f4"] = 21.442] = "f4";
    F[F["f5"] = 22.442] = "f5";
    F[F["f6"] = 23.442] = "f6";
})(F || (F = {}));
// console.log(F)
// sTRING ENUMS 
// Must have initializers
// They do not create mirror string values on the generated object
// Can not be used with computed values, booleans or objects
var Location;
(function (Location) {
    Location["Home"] = "Bwaise";
    Location["Work"] = "Gulu";
    Location["Educ"] = "Kyambadde";
    Location["Bwaise"] = "Tie";
    Location[Location["Leisure"] = 8] = "Leisure";
    Location[Location["Awake"] = 42.38] = "Awake";
    Location[Location["Keny"] = 8] = "Keny";
})(Location || (Location = {}));
// console.log(Location)
// console.log(typeof Location.Awake)
var Loc2;
(function (Loc2) {
    Loc2["home"] = "Bwaise";
    Loc2["ed"] = "Kyambadde";
})(Loc2 || (Loc2 = {}));
// console.log(Loc2) 
var FileAccess;
(function (FileAccess) {
    // Constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 4] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 4] = "ReadWrite";
    FileAccess[FileAccess["G"] = -9] = "G";
})(FileAccess || (FileAccess = {}));
// console.log(FileAccess)
var Action;
(function (Action) {
    Action[Action["Sleep"] = 2] = "Sleep";
    Action[Action["Drink"] = 3] = "Drink";
    Action[Action["Both"] = 3] = "Both";
})(Action || (Action = {}));
// console.log(Action)
// literal enum members
// Here enum members become types as well 
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    // kind: 0,
    kind: ShapeKind.Circle,
    radius: 4
};
// console.log(c)
var Count;
(function (Count) {
    Count[Count["zero"] = 0] = "zero";
    Count[Count["one"] = 1] = "one";
    Count[Count["two"] = 2] = "two";
})(Count || (Count = {}));
// for literal enum members, the enum becomes a type itself
function tell(num) {
    switch (num) {
        case Count.zero:
            console.log('zero here');
            break;
        case Count.one:
            console.log('one found');
            break;
        case Count.two:
            console.log('two found');
            break;
        default:
            // can help catch fallthrough bugs
            var _exhaust = num;
            console.error('exhausted', _exhaust);
    }
}
function f1Log(par) {
    console.log(par);
}
var Person2;
(function (Person2) {
    Person2[Person2["age"] = 52] = "age";
    Person2["gender"] = "Male";
})(Person2 || (Person2 = {}));
// f1Log(Person2)
// enums at compile time
// use keyof typeof to get a type with Enum keys 
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
// let l : LogLevelStringsAll = LogLevel.DEBUG;
var l2 = LogLevel;
var l3 = 'ERROR';
var sides = 'Left';
var loc = 'Awake';
var f = 'f0';
// console.log(l2, l3, sides, loc, f)
var Drink;
(function (Drink) {
    Drink[Drink["Hard"] = 1.5] = "Hard";
    Drink[Drink["Soft"] = 0.5] = "Soft";
    Drink[Drink["Other"] = -2.5] = "Other";
})(Drink || (Drink = {}));
// console.log(Location)
// using object as enum
var Week = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: undefined
}; //as const;
// console.log(Week.Wednesday)
function logF2(w) {
    console.log('w is', w);
}
logF2(Week.Tuesday);
