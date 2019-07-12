import Fighter from './Fighter'
import FightersView from './fightersView';
class fightController {
  _choosed: Fighter[];
  inGame: boolean;

  constructor(fightersView: FightersView) {
    const startButton: HTMLButtonElement = document.getElementById('start-button') as HTMLButtonElement;
    startButton.style.display = 'block';
    document.getElementById('instruction').style.display = 'block';
    document.getElementById('startImg').style.display = 'block';
    startButton.addEventListener('click', () => this._handleClickFight(fightersView));
    this.inGame = false;
    this._choosed = fightersView.fight;
  }

  private _fight(fighters: Fighter[], callback: (winner: Fighter) => void) {
    const [fighter1, fighter2] = fighters;
    this._inizializeHpBars(fighter1, fighter2);
    const health1 = fighter1.health;
    const health2 = fighter2.health;
    const interval = setInterval(() => {
      if (+fighter1.health > 0 && +fighter2.health > 0) {
        const [barWidth1, hitWidth1] = this._getDamage(fighter1, fighter2, health1);
        const [barWidth2, hitWidth2] = this._getDamage(fighter2, fighter1, health2);

        this._updateHpBars(barWidth1, hitWidth1, barWidth2, hitWidth2);
      } else {
        clearInterval(interval);
        callback(+fighter1.health > 0 ? fighter1 : fighter2);
      }
    }, 1000);
  }

  private _handleClickFight(fightersView: FightersView) {
    if(!this.inGame){
      const fighters: Fighter[] = fightersView.fight.map((fighter) =>
        new Fighter(fightersView.fightersDetailsMap.get(fighter._id)));

      (document.getElementById('start-button') as HTMLButtonElement).disabled = true;
      document.getElementById('hp').style.display = 'block';
      const winAudio = new Audio("../../resources/sounds/victory.mp3");
      const startAudio = new Audio("../../resources/sounds/round1.mp3");
      startAudio.play();
      this.inGame = true;
      this._fight(fighters, winner => {
        this._displayWinner(winner);
        this.inGame = false;
        winAudio.play();
      });
    }
  }

  private _inizializeHpBars(fighter1: Fighter, fighter2: Fighter) {
    document.getElementById('name1').innerText = fighter1.name;
    document.getElementById('name2').innerText = fighter2.name;
    document.getElementById('bar1').style.width = '100%';
    document.getElementById('bar2').style.width = '100%';
    document.getElementById('winnerName').style.display = 'none';
  }

  private _updateHpBars(barWidth1: number, hitWidth1: number, barWidth2: number, hitWidth2: number) {
    const bar1 = document.getElementById('bar1');
    const hit1 = document.getElementById('hit1');
    const bar2 = document.getElementById('bar2');
    const hit2 = document.getElementById('hit2');
    hit1.style.width = `${hitWidth1}%`;
    hit2.style.width = `${hitWidth2}%`;
    setTimeout(() => {
      hit1.style.width = '0';
      bar1.style.width = `${barWidth1 < 0 ? 0 : barWidth1}%`;
      hit2.style.width = '0';
      bar2.style.width = `${barWidth2 < 0 ? 0 : barWidth2}%`;
    }, 500);
  }

  private _displayWinner(winner: Fighter) {
    const winnerName = document.getElementById('winnerName');
    winnerName.style.display = 'block';
    winnerName.innerText = `Winner is ${winner.name}!`;
    if (this._choosed.length === 2)
      (document.getElementById('start-button') as HTMLButtonElement).disabled = false;
  }

  private _getDamage(fighter1: Fighter, fighter2: Fighter, health: string){
    const damage1 = fighter2.getHitPower() - fighter1.getBlockPower();
    fighter1.health = (+fighter1.health - (damage1 > 0 ? damage1 : 0)).toString();

    const barWidth1 = (+fighter1.health / +health) * 100;
    const hitWidth1 = (damage1 / +health) * 100;
    return [barWidth1, hitWidth1];
  }
}

export default fightController;