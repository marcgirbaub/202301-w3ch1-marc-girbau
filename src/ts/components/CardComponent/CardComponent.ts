import { type Character } from "../../Character/Character";
import { CardBodyComponent } from "../CardBodyComponent/CardBodyComponent";
import { Component } from "../Component/Component";
import { EmojiComponent } from "../EmojiComponent/EmojiComponent";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { OverlayCardComponent } from "../OverlayCardComponent/OverlayCardComponent";

interface CardComponentStructure {
  element: Element;
}

export class CardComponent extends Component implements CardComponentStructure {
  image: Element;

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
      "character__picture card-img-top",
      character
    );

    this.image = image.element;

    const body = new CardBodyComponent(this.element, character);

    const emoji = new EmojiComponent(this.element, character);

    const overlay = new OverlayCardComponent(
      this.element,
      character,
      this.image
    );
  }
}
