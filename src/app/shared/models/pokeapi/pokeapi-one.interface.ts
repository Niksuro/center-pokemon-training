export interface PokeapiOne {
    types: TypePoke[];
    sprites: {
        front_default: string;
    }
}

export interface TypePoke {
    slot: number;
    type: {
        name: string;
    }
}
