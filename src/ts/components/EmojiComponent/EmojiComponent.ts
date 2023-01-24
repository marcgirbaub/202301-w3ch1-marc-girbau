import { Advisor } from "../../Advisor/Advisor";
import { type Character } from "../../Character/Character";
import { Fighter } from "../../Figther/Figther";
import { King } from "../../King/King";
import { Squire } from "../../Squire/Squire";
import { Component } from "../Component/Component";

export class EmojiComponent extends Component {
  character: Character;

  constructor(parentElement: Element, character: Character) {
    super("i", parentElement, "emoji");

    this.character = character;

    this.render();
  }

  render() {
    if (this.character instanceof King) {
      this.element.innerHTML = `👑`;
    }

    if (this.character instanceof Fighter) {
      this.element.innerHTML = `🗡`;
    }

    if (this.character instanceof Advisor) {
      this.element.innerHTML = `🎓`;
    }

    if (this.character instanceof Squire) {
      this.element.innerHTML = `🛡`;
    }
  }
}
