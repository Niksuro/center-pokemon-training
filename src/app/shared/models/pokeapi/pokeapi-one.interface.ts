export interface PokeapiOne {
    types: TypePoke[];
    sprites: {
        front_default: string;
    }
    stats: StatsPoke[];
}

export interface TypePoke {
    slot: number;
    type: {
        name: string;
    }
}

interface StatsPoke {
    base_stat: number;
}