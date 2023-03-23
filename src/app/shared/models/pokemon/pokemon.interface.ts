export interface Pokemon {
  id: number;
  image: string;
  name: string;
  types: string[];
  health: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}