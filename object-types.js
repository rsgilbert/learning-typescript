// Object types
// https://www.typescriptlang.org/docs/handbook/2/objects.html
{
    function paintShape(opts) {
        console.log(opts.xPos);
        console.log(opts.yPos);
        opts['k'] = 9;
        console.log(opts);
    }
    // paintShape({ shape: {a: 3}, xPos: 3 })
    // paintShape({ shape: { b: 3}, yPos: 13 })
    function draw(_a) {
        var number = _a.sh, string = _a.x;
        console.log(number);
    }
    // draw({ sh: 4, x: 'kd' })
}
{
    function doSth(o) {
        console.log('style', o.style, 'time', o.time);
        o.time = 3;
        // o.style = 'jj'
    }
    function evict(home) {
        // home.resident = {}
        home.resident.name = '';
        home.resident.startDate = new Date(1);
    }
    var home = { resident: { name: 'Mark', startDate: new Date() } };
    home.resident = home.resident; //{name: 'kk', startDate: new Date() };
    // console.log('res home', home)
    evict(home);
    var changeEgo = function (ego, newEgoSize) {
        ego.size = newEgoSize;
    };
    var e = { size: 'huge' };
    // changeEgo(e, 'small')
    // console.log(e)
    // e.amount+=1;
}
// index signatures
{
    var arr = {};
    arr[4] = 55;
    arr['k1'] = false;
    //  arr[5] = 'Clean'
    arr['j'] = 4;
    var dict = { can: false, name: 5, 'other1': 55 };
    // dict['other1'] = 5
    // dict['other2'] = false;
    dict['can'] = true;
    dict.name = 33;
}
// extend and intersection
{
    var cc = { color: 'pink', radius: 2 };
    var coloredC = { color: 'blue', radius: 5 };
}
// Generic object types
{
    var x = {
        contents: "Great"
    };
    if (typeof x.contents == "string") {
        //  console.log(x.contents.toLowerCase())
    }
    var b = { contents: 'yellow' };
    var bN = { contents: 1 };
    // console.log(b, bN)
    function setContents(box, newContents) {
        box.contents = newContents;
    }
    setContents(b, 'mangoes');
    setContents(bN, 99);
    var o = { con: bN };
    // Array
    function doSth2(value) {
        console.log(value.join(''));
    }
    var arr1 = ['a', 'b', 'c'];
    // doSth2(arr1)
    // readonly array
    function seeSth(values) {
        // We can read from values 
        var copyValues = values.slice();
        console.log('Copied values are', copyValues);
        doSth2(copyValues);
        copyValues[1] = "changed";
        console.log(copyValues);
        console.log(values);
        values = ["G"];
    }
    // seeSth(arr1)
    // short hand for ReadonlyArray 
    function seeSth2(values) {
        console.log(values);
        values = [1];
        console.log(values);
    }
    // seeSth2([5, 8, 13])
}
// tuples
{
    function doSth4(pair) {
        var a = pair[0], b = pair[1];
        console.log('a', a, 'b', b);
    }
    doSth4(['kk', 3]);
    var k1 = ["Marry", 1];
    var k2 = { 0: 'd', 1: 2, length: 2 };
    var m = [1, 2, 4];
    var m2 = [41, 2];
    var s = ['head', 1, 2, 3, 4];
    var d = [false];
    var d2 = [true, 'ab', 'cd'];
    // readonly tuples 
    function seeTpl() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0]) {
            console.log(args.slice(1));
        }
        else
            console.log('all are', args);
    }
    seeTpl(true, 1, 2);
    seeTpl(false, 45, 21, 3);
    function logTp(ar) {
        console.log('ar is', ar);
    }
    logTp(['age', 'of']);
    var c = ['teake', 'home'];
    logTp(c);
}
