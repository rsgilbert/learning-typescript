// Object types
// https://www.typescriptlang.org/docs/handbook/2/objects.html

{
    // Optional properties 
    interface PaintOptions {
        shape: object,
        xPos?: number,
        yPos?: number
    }

    function paintShape(opts: PaintOptions) {
        console.log(opts.xPos)
        console.log(opts.yPos)
        opts['k'] = 9
        console.log(opts)
    }

    // paintShape({ shape: {a: 3}, xPos: 3 })
    // paintShape({ shape: { b: 3}, yPos: 13 })

    function draw({ sh: number, x: string }) {
        console.log(number)
    }
    // draw({ sh: 4, x: 'kd' })
}

{
    // Readonly properties
    interface MyType {
        readonly style: string;
        time: number;
    } 

    function doSth(o: MyType) {
        console.log('style', o.style, 'time', o.time)
        o.time = 3
        // o.style = 'jj'
    }

    interface Home {
        readonly resident: {
            name: string; startDate: Date
        }
    }

    function evict(home: Home) {
        // home.resident = {}
        home.resident.name = ''
        home.resident.startDate = new Date(1);
    }

    let home = { resident: { name: 'Mark', startDate: new Date() }}
    home.resident  = home.resident; //{name: 'kk', startDate: new Date() };
    // console.log('res home', home)
    evict(home);
    // console.log('new home', home);
    

    // Manage expectations of what readonly implies 
    type Ego  = {
        readonly size: 'huge' | 'small';
        readonly amount?: number      
    }

    type PlainEgo = { size: 'huge' | 'small'}

    const changeEgo = (ego: PlainEgo, newEgoSize: 'huge' | 'small') => {
        ego.size = newEgoSize;
    }
    const e : Ego = { size: 'huge' }
    // changeEgo(e, 'small')
    // console.log(e)
    // e.amount+=1;

}

// index signatures
{
     interface StringArray {
         [id : number]: number,
         [index: string]:  boolean | number
     }

     let arr: StringArray = { }
     arr[4] = 55 
     arr['k1'] = false
    //  arr[5] = 'Clean'
     arr['j'] = 4
    //  arr.fm = false


    interface NumDict {
        can: boolean;
        readonly [index: string]: boolean | number,
        name: number
    }

    let dict: NumDict = { can: false, name: 5, 'other1': 55 }
    // dict['other1'] = 5
    // dict['other2'] = false;
    dict['can'] = true
    dict.name = 33
}

// extend and intersection
{
    interface Colorful {
        color: string 
    }

    interface Circle {
        radius: number;
        // color: string
    }

    // extend
    interface ColorfulCircle extends Colorful, Circle {
    }

    let cc: ColorfulCircle = { color: 'pink', radius: 2 }

    // intersection
    type ColoredCircle = Colorful & Circle 
    let coloredC : ColoredCircle = {color: 'blue', radius: 5 }

}   

// Generic object types
{
    interface Box {
        contents: unknown 
    }

    let x: Box = {
        contents: "Great"
    }

    if(typeof x.contents == "string") {
    //  console.log(x.contents.toLowerCase())
    }
    // console.log((x.contents as string).toLowerCase())

    interface MyBox<Type> {
        contents: Type
    }

    let b : MyBox<string> = { contents: 'yellow' }

    let bN : MyBox<number> = { contents: 1 }
    
    // console.log(b, bN)

    function setContents<Typ> (box: MyBox<Typ>, newContents: Typ) {
        box.contents = newContents;
    }

    setContents(b, 'mangoes')
    setContents(bN, 99)
    // console.log(b, bN)

    type OtherBox<Type> = {
        con: Type
    }
    let o : OtherBox<MyBox<number>> = { con: bN }

    // Array
    function doSth2(value: Array<string>) {
        console.log(value.join(''))
    }
    let arr1 :string[] = ['a', 'b', 'c']
    // doSth2(arr1)

    // readonly array
    function seeSth(values: ReadonlyArray<string>) {
        // We can read from values 
        var copyValues = values.slice() 
        console.log('Copied values are', copyValues)
        doSth2(copyValues)
        copyValues[1] = "changed"
        console.log(copyValues)
        console.log(values) 
        values = ["G"]

    }
    // seeSth(arr1)

    // short hand for ReadonlyArray 
    function seeSth2(values: readonly number[]) {
        console.log(values)
        values = [1]
        console.log(values)
    }
    // seeSth2([5, 8, 13])
    
} 

// tuples
{
    type StringNumberPair = [string, number];

    function doSth4(pair: [string, number]) {
        const [a, b] = pair 
        console.log('a', a,'b', b)
    }
    doSth4(['kk',3])

    interface SNPair {
        length: 2;
        0: string;
        1: number;
        // slice(start?: number, end?: number) : Array<string | number>;
    }


    let k1 : SNPair = ["Marry", 1]
    let k2 : SNPair = { 0: 'd', 1: 2, length: 2 }
    // doSth4(k1)

    type Maybe3 = [number, number, number?]
    let m : Maybe3 = [1,2,4]
    let m2 : Maybe3 = [41,2]
    // console.log(m, m2)

    // With rest parameters
    type Snail = [string, ...number[]]
    let s : Snail = ['head', 1,2,3,4]
    type Dina = [boolean, ...string[]]
    let d : Dina = [false]
    let d2 : Dina = [true, 'ab', 'cd']

    // readonly tuples 
    function seeTpl(...args : readonly [boolean, ...number[]]) {
        if(args[0]) {
            console.log(args.slice(1))
        }
        else console.log('all are', args)
    }
    seeTpl(true, 1, 2)
    seeTpl(false, 45, 21, 3)

    function logTp(ar: readonly [string, string]) {
        console.log('ar is', ar)
    }
    logTp(['age', 'of'])

    // arrays with "as const" are inferred as readonly tuples
    let c = ['teake', 'home'] as const;
    logTp(c)
}