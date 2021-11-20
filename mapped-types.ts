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
    console.log(c)

}