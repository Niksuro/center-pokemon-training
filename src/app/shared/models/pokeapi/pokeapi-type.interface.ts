export interface TypeData {
    damage_relations: {
        double_damage_from : type[],
        double_damage_to: type[],
        half_damage_from : type[],
        half_damage_to: type[],
        no_damage_from : type[],
        no_damage_to: type[],
    }
}

interface type {
    name: string;
    url: string;
}