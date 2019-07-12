interface IFighter{
    name: string;
    health: string;
    attack: string;
    defense: string;
    source: string;

    getHitPower: () => number;
    getBlockPower: () => number;
}

interface Details{
    name: string;
    health: string;
    attack: string;
    defense: string;
    source: string;
  }

class Fighter implements IFighter{
    name = '';
    health = '';
    attack = '';
    defense = '';
    source = '';

    constructor(details: Details) {
      this.name = details.name;
      this.health = details.health;
      this.attack = details.attack;
      this.defense = details.defense;
      this.source = details.source;
    }
    public getHitPower() {
      const criticalHitChance: number = getRandom(1, 3);
      return +this.attack * criticalHitChance;
    }
    public getBlockPower() {
      const dodgeChance: number = getRandom(1, 3);
      return +this.defense * dodgeChance;
    }
  }
  
  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  export default Fighter;
  