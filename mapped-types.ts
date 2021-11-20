{
    type OnlyBoolsAndStr = {
        [key: string] : boolean | string
    }

    const cons : OnlyBoolsAndStr = { 
        man: 'Gentle',
        woman: 'Kind',
        isFriendly: false,
    }

    // mapped 
    // mapped type uses a union of PropertyKeys
    type OptionFlags<Type> = {
        [Property in keyof Type]: boolean 
    }

    type Feature = { 
        darkMode: () => void,
        agile: () => string,
        repeats: number
    }

    type FeatureFlags = OptionFlags<Feature>
    let ff: FeatureFlags = { darkMode: false, agile: true, repeats: true }

    type Character = {
        [Property in 'age'|'size'|'weight'| number ]: string
    }

    let c: Character = {
        1: "one year old",
        age: "15",
        size: "3m",
        "weight": "2kg"
    }
    // console.log(c)

    type j = keyof  typeof c
}


// mapping modifiers
{
    // Remove readyonly modifier    
    type CreateMutable<Type> = {
        -readonly [Property in keyof Type]: Type[Property];
    }

    type CreateImmutable<Type> = {
        +readonly [Property in keyof Type]: Type[Property] | Property
    }

    type LockedString = {
        readonly [strIndex: string] : string;
        readonly [numIndex: number] : string;
        meta : 'I am meta';
    }

    let l : LockedString = { meta: "I am meta", name: 'lock' }
    // l.dd = 'f'
    // console.log(l.name)
    l.meta = 'I am meta'
    

    l = {meta: 'I am meta'}
    

    let lMutable : CreateMutable<LockedString> = {meta: 'I am meta', time: '3am', name: 'jackson'}
    lMutable.name = 'time'
    // console.log(lMutable)

    let lImmutable : CreateImmutable<LockedString> = { meta: 'I am meta', time: 'd'}
    // lImmutable.meta = 'meta'
    // lImmutable.time = ''
 


}

{
    // Remove optional attributes
    type Concrete<Type> = {
        [Property in keyof Type]-?: Type[Property]
    }

    type MaybeUser = {
        id: string,
        name?: string,
        gender?: 'male'|'female';
        age?: number;
    }

    let mU : MaybeUser = { id: "U100", gender: 'female'}
    
    type DefiniteUser = Concrete<MaybeUser>
    let dU : DefiniteUser = { id: 'A00', name: 'Kenny', gender: 'female',age: 52}

    type Optional<Type> = {
        [Property in keyof Type]+?: Type[Property]
    }

    type MaybeUser2 = Optional<DefiniteUser> & { id: string }


    let mU2 : Optional<DefiniteUser> = { }
    mU2.age = 1

    let maybe2 : MaybeUser2 = { id: 'A14'}
    maybe2.age = 5
    mU = maybe2
    // below doesnt work
    // mU = mU2
}

{
    // Key Remapping via `as`
    type RemappedProps<Type> = {
        [Property in keyof Type as number]: Type[Property]
    }

    type T1 = { name: string, age: number }

    type T1R = RemappedProps<T1>

    let o : T1R = {0: 2, 1: 'd' }
    console.log(o)
    // type T1R2 = 

    type RemappedToStr<Type> = {
        [Property in keyof Type as 'name'|'cain'|'abel'] : Property | Type[Property]
    }
    type T1RS = RemappedToStr<T1R>

    let o2: RemappedToStr<T1R> = { 'cain': 5, 'name': 'akd', abel: 'jj' }

    type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: Type[Property]
    }

    // intersection type
    type M = string & 'Mary'
    let m: M = 'Mary'

    type Person = { 
        name: string;
        age: number;
        location: string;
        // [i: string]: string|number
    }

    type LazyPerson = Getters<Person>

    type CapitalPerson = {
        [Property in keyof Person as `${Capitalize<Property & string>}`]: Person[Property]
    }

    let c: CapitalPerson = { Name: 'tik', Age: 2, Location: 'fd'}
    // c[2] = 'd'
    // c['df'] = 'f'
    // console.log(c)

    let lazy : LazyPerson = {
        getName: 'Georgia',
        getAge: 1,
        getLocation: "Kampala"
    }
    // console.log(lazy)


    // Filter out keys
    type RemoveKindField<Type> = {
        [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property]
    }

    interface Plant {
        phylum: string,
        class: string,
        kind: string,
        isExtinct: boolean
    }

    type PlantWithoutKind = RemoveKindField<Plant>

    // We can map over arbitrary unions, not just unions from keyof or string|number|symbol
    type EventConfig<EventUnion extends { kind: string }> = {
        +readonly [E in EventUnion as E["kind"]]: (event: E) => void 
    }

    type CircleEvent = { kind: 'circle' }
    type RectEvent = { kind: 'rect' }

    type Config = EventConfig<CircleEvent|RectEvent>

    let cg: Config = { circle: () => null, rect: (a) => a }

    // mapped type with a conditional type
    type ExtractPI<Type> = {
        [Property in keyof Type]: Type[Property] extends { pi: true } ? true : false 
    }

    type DBFields = {
        id: { format: 'inc'},
        name: { type: string, pi: true, jam: 2},
        class: { pi: false, origin: number },
        tech: { pi: true }
    }

    type DBFieldsWithPi = ExtractPI<DBFields>
}

