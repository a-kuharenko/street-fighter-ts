import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';
import showDetails from './showDetails'

interface IFightersView{
    handleClick: () => void;
    createFighters: (fighters: FighterElement[]) => void;
    handleFighterClick: (ev, fighter: Fighter) => void;
    fight: Fighter[];
    fighterElements: FighterElement[];
    element: HTMLElement;
    fightersDetailsMap: Map<number, object>;
}

interface Fighter{
    _id: number;
    selected: boolean;
}

interface FighterElement{
  name: string;
  source: string;
}

interface Details{
  name: string;
  health: string;
  attack: string;
  defense: string;
  source: string;
}
class FightersView extends View implements IFightersView {
    
  handleClick;
  fight;
  fighterElements;

  constructor(fighters: FighterElement[]) {
    super();
    
    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);

    this.fight = [];
  }

  fightersDetailsMap = new Map();

  createFighters(fighters: FighterElement[]) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element as HTMLElement;
    });
    this.fighterElements = fighterElements;
    this.element = this.createElement({ tagName: 'div', className: 'fighters'});
    this.element.append(...fighterElements);
  }
  private _chooseFighter(fighter: Fighter){
    const defaultHEIGHT: string = '260px';
    const selectedHEIGHT: string = '320px';
    const borderSTYLE: string = '3px solid yellow';

    const imageElements = document.getElementsByClassName('fighter-image');
    const id: number = fighter._id - 1;

    let select = function(id: number, fighter: Fighter){
      this.fight.push(fighter);
      this.fighterElements[id].style.border = borderSTYLE;
      const imageElement = imageElements[id] as HTMLImageElement;
      imageElement.style.height = selectedHEIGHT;
    }
    select = select.bind(this);

    let unselect = function(id: number, fighter: Fighter){
      if(fighter)
        this.fight.splice(this.fight.indexOf(fighter), 1);
      this.fighterElements[id].style.border = '';
      const imageElement = imageElements[id] as HTMLImageElement;
      imageElement.style.height = defaultHEIGHT;
    }
    unselect = unselect.bind(this);

    if(!fighter.selected){
      if(this.fight.length === 2){ 
        const f1 = this.fight.shift() as Fighter;
        const id = f1._id - 1;
        unselect(id, undefined);
        f1.selected = !f1.selected;
      }
      select(id, fighter);
    }
    else
      unselect(id, fighter);
    fighter.selected = !fighter.selected;
  }
  async handleFighterClick(event, fighter: Fighter) {
    let details = this.fightersDetailsMap.get(fighter._id) as Details;
    if(!details){
      details = await fighterService.getFighterDetails(fighter._id)
      fighter.selected = false;
    }
    !fighter.selected ? showDetails(details, function(updatedDetails: Details) {
      details = updatedDetails;
    }) : 0;
    this.fightersDetailsMap.set(fighter._id, details);
    this._chooseFighter(fighter);
    if(this.fight.length === 2) {
        const startButton = document.getElementById('start-button') as HTMLButtonElement;
        startButton.disabled = false;
    }
    else{
        const startButton = document.getElementById('start-button') as HTMLButtonElement;
        startButton.disabled = true;
    }
  }
}

export default FightersView;