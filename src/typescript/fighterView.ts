import View from './view';

interface Fighter{
    name: string;
    source: string;
}

class FighterView extends View {
  element;

  constructor(fighter: Fighter, handleClick: (event: Event, fighter: Fighter) => void) {
    super();

    this._createFighter(fighter, handleClick);
  }

  private _createFighter(fighter: Fighter, handleClick: (event: Event, fighter: Fighter) => void) {
    const { name, source } = fighter;
    const nameElement = this._createName(name);
    const imageElement = this._createImage(source);

    this.element = this.createElement({ tagName: 'div', className: 'fighter' });
    this.element.append(imageElement, nameElement);
    this.element.addEventListener('click', event => handleClick(event, fighter), false);
  }

  private _createName(name: string) {
    const nameElement = this.createElement({ tagName: 'span', className: 'name' });
    nameElement.innerText = name;

    return nameElement;
  }

  private _createImage(source: string) {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes
    });

    return imgElement;
  }
}

export default FighterView;