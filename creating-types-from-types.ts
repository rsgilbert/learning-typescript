import { type } from "os";

// keyof
{
    type Name = {
        firstName: string;
        lastName: string;
        count: number; 
        [n: number]: boolean,
      //  [s: string]: object | number | string | boolean
    }
    type N = keyof Name;
    let k: N = 'count'
    let name: Name = { firstName: '', lastName: 'd', count: 4 }
    name[3] = false 
    k = 49
}

// typeof 
// From the type context, should only be used on variable names
{
    let k = 'hey'
    // type typeof k is string because we used let
    let n : typeof k = 'd'

    const k2 = 'hey'
    // type typeof k2 is 'hey' because we used const 
    let n2 : typeof k2 = 'hey'

    type Predicate = (x: any) => boolean;
    type K = ReturnType<Predicate>

    function f() {
        return 12
    }

    type FR = ReturnType<typeof f>
    let a = []
    let j : typeof a.length
  

}

// indexed access types
{
    type Person = { age: number, name: string, alive: boolean }
    type Age = Person['age']
    type NameAge = Person ['name'|'age']

    let na: NameAge = 5
    let na2: NameAge = 'kf'
    let a : Age = 4

    type d = Person[keyof Person]

    let ar = [
        { name: 'John'}, { name: 'Mary'}, { name: 'Peter'}
    ]

    type A = typeof ar;
    type A2 = keyof A
    type arrElTyp = (typeof ar)[number]

    type OT = { [n: number]: boolean, make: string, [s:string]: number|boolean|string }
    type ONT = OT[number|'make'|string]

    type nt = "name"
    type nameT = typeof ar[number][nt]
    type n2 = (typeof ar)[number]['name']
    // has to be const
    const nm = "name"
    type k2 = typeof nm;
    type n3 = typeof ar[number][k2]

    type p = { 
        age: string
    }

    type k = typeof nm;
    type pt = p['age']
    type r = 'sil'
}

// conditional types 
{
    interface Animal {
        live() : void 
    }
    interface Dog extends Animal {
        woof: string
    }

    // D
    interface Dog2 extends Animal{}

    type Ex1 = Dog extends Animal ? string : number;

    type Ex2 = string extends number ? boolean : bigint;

    type Ex3 = Animal extends Dog ? number : boolean;

    type Ex4 = Animal extends Dog ? true : false ;

    type Ex5 = RegExp extends string ? 1 : 0;

    type t = string | number;

    type Ex6 = string extends t ? 1 : 0;

    function checkT(a0: string|boolean, a2: any) {
        type t2 = typeof a2;
        type t3 = any extends string ? 1 : 0;
        type t = typeof a2 extends typeof a0 ? 1 : 0
    }

    // conditional types with generics
    interface IdLabel { id: number; }
    interface NameLabel { name: string; }

    type NameOrId<T extends number | string> = T extends number 
        ? IdLabel 
        : NameLabel

     

    function createLabel<T extends string | number>(nameOrId: T) : NameOrId<T> {
        // switch(typeof nameOrId) {
        //     case "number":
        //         const label : NameOrId<number> = { id: nameOrId }
        //         return label;
        //     case "bigint"

        // }
        // if(typeof nameOrId === "number") {
        //     const label : NameOrId<number> = { id: nameOrId }
        //         return label;
        // }
        
        throw 'unimplemented'
    }

    // let a = createLabel("typescript")
    // let b = createLabel(5)
    // let c = createLabel(Math.random() ? "hello" : 4)

    // conditional type constraints 
    type MessageOf<T extends { mess: unknown}> = T["mess"]

    interface Email {
        mess: string 
    }

    type EmailMessContents = MessageOf<Email>

    interface Count { mess: number }
    type CountMessContents = MessageOf<Count>

    // Use type never if no such property exists
    type MessOf<T> = T extends { mess: unknown } ? T["mess"] : never 

    type mes1 = MessOf<Email>
    type mes2 = MessOf<string>

    // Flattens array types to their element types but leaves them alone if they are not arrays 
    type Flatten<T> = T extends any[] ? T[number] : T 

    type s1 = Flatten<string[]>
    type n1 = Flatten<number[]>
    type s2 = Flatten<string>
    type n2 = Flatten<number|string[]>
    type n3 = Flatten<(number|string)[]>
    type n4 = Flatten<null>
    let k : (number|string)[] = [1, 'df']

    // infer aaray item type
    type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;
    type Flatten3<T> = T extends (infer U)[] ? U : T 
    type a1 = Flatten2<string[]>
    type b1 = Flatten3<number[]>
    type a2 = Flatten2<Array<number|string>>
    type b2 = Flatten3<boolean>
    type a3 = Flatten2<null>
    type a4 = Flatten2<"may">
    type tt = 'mm'[]
    type tt2 = Flatten2<tt>

    // infer return type
    type GetReturnType<Type> = Type extends (...args: never[]) => infer Return 
        ? Return 
        : never 
    
    function f1() { return 5 }
    function f2(a: number) { return 'queen'}
    const f3 = (a, b, c, ...d): string =>  a + b;
    const f5 = () => {}

    type f1Type = GetReturnType<typeof f1>
    type f2Type = GetReturnType<typeof f2>
    type f3Type = GetReturnType<typeof f3>
    type f5Type = GetReturnType<typeof f5>


}

declare function s1() : number;
declare function s1(n: number) : number;
declare function s1(s: string) : string;
declare function s1(sOrN : string | number) : string | number;


type S = ReturnType<typeof s1>

{
    // Distributive conditional types 
    // Conditional types on a generic type 
    type ToArray<Type> = Type extends any ? Type[] :never;

    //type T2 = string[] extends any ? string : number;

    // distributes on string, number, true, false
    type StrOrNumOrBoolArray = ToArray<string|number|(boolean)>

    let k : StrOrNumOrBoolArray = [true, true]

    // In case you dont want distributivity
    type ToArrayNonDistr<Type> = [Type] extends [any] ? Type[] : never;

    type StrNumBoolArray = ToArrayNonDistr<string|number|boolean> 
    let k2: StrNumBoolArray = [1, 2, false, 'ge']


    
}