export interface ComponentStructure {
  element: Element;
}

export class Component implements ComponentStructure {
  element: Element;

  constructor(tagName: string, parentElement: Element, className: string) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }
}
