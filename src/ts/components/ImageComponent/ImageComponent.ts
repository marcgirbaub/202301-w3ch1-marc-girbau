import { type Character } from "../../Character/Character";
import { Component } from "../Component/Component";

export class ImageComponent extends Component {
  constructor(parentElement: Element, className: string, character: Character) {
    super("img", parentElement, className);

    (this.element as HTMLImageElement).src =
      character.characterData.imageSource;
  }
}
