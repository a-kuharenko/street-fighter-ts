import FightersView from './fightersView';
import { fighterService } from './services/fightersService';
import fightController from './FightController'

class App {
  constructor() {
    this._startApp();
  }

  static rootElement = document.getElementById('root') as HTMLDivElement;
  static loadingElement = document.getElementById('loading-overlay') as HTMLDivElement;

  private async _startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';
      
      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);
      const fightersElement = fightersView.element;
      new fightController(fightersView);

      const audio = new Audio("../../resources/sounds/soundtrack.mp3");
      audio.loop = true;
      audio.play();

      App.rootElement.appendChild(fightersElement);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.style.visibility = 'hidden';
    }
  }
}

export default App;