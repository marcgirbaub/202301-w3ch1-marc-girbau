import { type Character } from "../../Character/Character";
import { Component } from "../Component/Component";
import { ImageComponent } from "../ImageComponent/ImageComponent";

interface CardComponentStructure {
  element: Element;
}

export class CardComponent extends Component implements CardComponentStructure {
  constructor(
    tagName: string,
    parentElement: Element,
    className: string,
    character: Character
  ) {
    super(tagName, parentElement, className);

    this.element as HTMLDivElement;

    const image = new ImageComponent(
      this.element,
      "character-picture",
      character
    );

    this.element.appendChild(image.element);
  }
}
