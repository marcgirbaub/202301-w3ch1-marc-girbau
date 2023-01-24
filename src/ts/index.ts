import { Advisor } from "./Advisor/Advisor";
import { characters } from "./character";
import { Character } from "./Character/Character";
import { CardComponent } from "./components/CardComponent/CardComponent";
import { ListElementComponent } from "./components/ListElementComponent/ListElementComponent";
import { UnorderedListComponent } from "./components/UnorderedListComponent/UnorderedListComponent";
import { Fighter } from "./Figther/Figther";
import { King } from "./King/King";
import { Squire } from "./Squire/Squire";
import { type CharacterDataStructure } from "./types/types";
import joffreyImage from "../img/joffrey.jpg";
import bronnImage from "../img/bronn.jpg";
import daenerysImage from "../img/daenerys.jpg";
import jaimeImage from "../img/jaime.jpg";
import tyrionImage from "../img/tyrion.jpg";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: String(joffreyImage),
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: String(jaimeImage),
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: String(daenerysImage),
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: String(tyrionImage),
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: String(bronnImage),
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);

const appContainerEl = document.querySelector(".app")!;

const unorderedList: Element = document.createElement("ul");
unorderedList.classList.add("characters-list");
unorderedList.classList.add("row");
unorderedList.classList.add("list-unstyled");

const listElement: Element = document.createElement("li");
listElement.classList.add("character");
listElement.classList.add("col");

unorderedList.appendChild(listElement);

appContainerEl.appendChild(unorderedList);

const joffreyCard = new CardComponent(
  "div",
  listElement,
  "card character__card",
  joffrey
);

const joffreyCardElement = joffreyCard.element;
