function Dinosaur(name) {
  this.name = name,
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

const DEAD_TIRED = 0;
const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const DEAD_HUNGRY = 10;
const DEAD_OLD = 30;

Dinosaur.prototype.growUp = function() {
  if (!this.isAlive()) {
    throw new Error('Your dinosaur is no longer alive :()');
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};


Dinosaur.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error('Your dinosaur is no longer alive :(');
  }
  if ((this.fitness + 4) <= MAX_FITNESS) {
    this.fitness += 4;
  }
  else {this.fitness = MAX_FITNESS;
  }

};


Dinosaur.prototype.feed = function() {
  if ((this.hunger - 3) >= MIN_HUNGER) {
    this.hunger -= 3;
  }
  else {this.hunger = MIN_HUNGER;
  }
};

Dinosaur.prototype.isAlive = function() {
  return (
    this.fitness > DEAD_TIRED
    && this.hunger < DEAD_HUNGRY
    && this.age < DEAD_OLD
  );
};

Dinosaur.prototype.checkUp = function() {
  if (!this.isAlive()) {
    return 'Your dinosaur is no longer alive :(';
  }
  if (this.fitness <= 3 && this.hunger < 5) {
    return 'I need a walk';
  }
  if (this.hunger >= 5 && this.fitness > 3) {
    return 'I am hungry';
  }
  if (this.hunger >= 5 && this.fitness <= 3) {
    return 'I am hungry AND I need a walk';
  }
  return 'I feel great';
};

module.exports = Dinosaur;













