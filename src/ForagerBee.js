class ForagerBee extends Bee{
  // TODO..
  constructor(){
    super();
    this.canFly = true;
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.treasureChest = [];
  }
  forage = () => this.treasureChest.push('treasure');
};
