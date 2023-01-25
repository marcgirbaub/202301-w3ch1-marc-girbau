import { type Character } from "../../Character/Character";
import { Component } from "../Component/Component";

export class CardBodyComponent extends Component {
  character: Character;

  constructor(parentElement: Element, character: Character) {
    super("div", parentElement, "card-body");
    this.character = character;

    this.render();
  }

  render() {
    if (this.character.isAlive) {
      this.element.innerHTML = `
            <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age} yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>`;
    }

    if (!this.character.isAlive) {
      this.element.innerHTML = `
            <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age} yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                </li>
              </ul>
            </div>`;
    }
  }
}
