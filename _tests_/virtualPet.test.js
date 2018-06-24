const Dinosaur = require('../src/virtualPet');

const myDinosaur = new Dinosaur('Derek');

describe('creating a new Dinosaur', () => {
  it('creates an object with the given name property', () => {
    expect(myDinosaur.name).toEqual('Derek');
  });

  it('has an initial age of 0', () => {
    expect(myDinosaur.age).toEqual(0);
  });

  it('has initial hunger of 0', () => {
    expect(myDinosaur.hunger).toEqual(0);
  });

  it('has initial fitness of 10', () => {
    expect(myDinosaur.fitness).toEqual(10);
  });

});

describe('growUp', () => {
  it('increments the age by 1', () => {
    myDinosaur.growUp();
    expect(myDinosaur.age).toEqual(1);
  });

  it('increments hunger by 5 when growUp method is called', () => {
    expect(myDinosaur.hunger).toEqual(5);
  });

  it('decrements fitness by 3 when growUp method is called', () => {
    expect(myDinosaur.fitness).toEqual(7);
  });

  it('throws if your dinosaur is dead', () => {
    myDinosaur.age = 30;
    expect(() => myDinosaur.growUp()).toThrow('Your dinosaur is no longer alive :(');
  });
});

describe('walk', () => {
  it('increments fitness by 4', () => {
    myDinosaur.fitness = 4;
    myDinosaur.walk();
    expect(myDinosaur.fitness).toEqual(8);
  });

  it('has a limit of 10', () => {
    myDinosaur.walk();
    expect(myDinosaur.fitness).toEqual(10);
  });

  it('throws if your dinosaur is dead', () => {
    myDinosaur.fitness = 0;
    expect(myDinosaur.walk).toThrow('Your dinosaur is no longer alive :(');
  });

});

describe('feed', () => {
  it('decrements the dinosaurs hunger by 3', () => {
    myDinosaur.hunger = 6;
    myDinosaur.feed();
    expect(myDinosaur.hunger).toEqual(3);
  });

  it('does not go below 0', () => {
    myDinosaur.hunger = 2;
    myDinosaur.feed();
    expect(myDinosaur.hunger).toEqual(0);
  });

  it('throws if your dinosaur is dead', () => {
    myDinosaur.hunger = 10;
    expect(myDinosaur.walk).toThrow('Your dinosaur is no longer alive :(');
  });
});

describe('isAlive', () => {
  it('returns false if fitness is <= 0', () => {
    myDinosaur.fitness = 0;
    myDinosaur.hunger = 9;
    myDinosaur.age = 29;
    expect(myDinosaur.isAlive()).toEqual(false);
  });

  it('returns false if hunger is >= 10', () => {
    myDinosaur.hunger = 10;
    myDinosaur.fitness = 1;
    myDinosaur.age = 29;
    expect(myDinosaur.isAlive()).toEqual(false);
  });

  it('returns false if age is >= 30', () => {
    myDinosaur.age = 30;
    myDinosaur.hunger = 9;
    myDinosaur.fitness = 1;
    expect(myDinosaur.isAlive()).toEqual(false);
  });

  it('returns true if they are fit, full & young', () => {
    myDinosaur.fitness = 1;
    myDinosaur.hunger = 9;
    myDinosaur.age = 29;
    expect(myDinosaur.isAlive()).toEqual(true);
  });

});

describe('checkUp', () => {
  it('returns "I need a walk" if fitness is 3 or less & the dino is not hungry', () => {
    myDinosaur.fitness = 3;
    myDinosaur.hunger = 4;
    expect(myDinosaur.checkUp()).toEqual('I need a walk');
  });

  it('returns "I am hungry" if hunger is 5 or more & the dino doesnt need walking', () => {
    myDinosaur.hunger = 5;
    myDinosaur.fitness = 4;
    expect(myDinosaur.checkUp()).toEqual('I am hungry');
  });

  it('returns "I am hungry AND I need a walk" if both are true', () => {
    myDinosaur.hunger = 5;
    myDinosaur.fitness = 3;
    expect(myDinosaur.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it('returns "I feel great" if neither are true', () => {
    myDinosaur.hunger = 4;
    myDinosaur.fitness = 4;
    expect(myDinosaur.checkUp()).toEqual('I feel great');
  });

  it('returns "Your dinosaur is no longer alive :(" if your dinosaur is dead', () => {
    myDinosaur.hunger = 10;
    expect(myDinosaur.checkUp()).toEqual('Your dinosaur is no longer alive :(');
  });

});