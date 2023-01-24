export interface ComponentStructure {
  element: Element;

  render: () => void;
}

export class Component implements ComponentStructure {
  element: Element;

  render: () => void;

  constructor(tagName: string, parentElement: Element, className: string) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }
}
