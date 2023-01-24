import { type Character } from "../../Character/Character";
import { Fighter } from "../../Figther/Figther";
import { King } from "../../King/King";
import { Squire } from "../../Squire/Squire";
import { Component } from "../Component/Component";
import { Advisor } from "../../Advisor/Advisor";

export class OverlayCardComponent extends Component {
  character: Character;

  constructor(parentElement: Element, charachter: Character) {
    super("div", parentElement, "character__overlay");

    this.character = charachter;

    parentElement.appendChild(this.element);

    this.render();
  }

  render() {
    if (this.character instanceof King) {
      this.element.innerHTML = `
              <ul class="list-unstyled">
                <li>Years of Reign: ${this.character.yearsOfReign}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>`;
    }

    if (this.character instanceof Fighter) {
      this.element.innerHTML = `
              <ul class="list-unstyled">
                <li>Weapon: ${this.character.weapon}</li>
                <li>Dexterity: ${this.character.dexterity}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            `;
    }

    if (this.character instanceof Squire) {
      this.element.innerHTML = `<ul class="list-unstyled">
                <li>Kiss Ass level: ${this.character.kissAssLevel}</li>
                <li>Serves to: ${this.character.serves.characterData.name}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>`;
    }

    if (this.character instanceof Advisor) {
      this.element.innerHTML = `<ul class="list-unstyled">
                <li>Advises to:${this.character.advises.characterData.name}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>`;
    }
  }
}
