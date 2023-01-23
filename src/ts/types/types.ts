import { type Fighter } from "../Figther/Figther";
import { type Character } from "../Character/Character";

export interface CharacterDataStructure {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface CharacterStructure {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}

export interface KingStructure extends CharacterStructure {
  yearsOfReign: number;
}

export interface FighterStructure extends CharacterStructure {
  weapon: string;
  dexterity: number;
}

export interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
