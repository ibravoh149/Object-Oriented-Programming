class Animal{
  constructor(name, height,dateOfBirth, numberOflegs){
    this.name = name;
    this.height = height;
    this.dateOfBirth= dateOfBirth;
    this.numberOflegs= numberOflegs;
  }
  
  age(){
    return `${this.name}  is ${(new Date()).getFullYear() - this.dateOfBirth} year old`;
  }
  
  type(){
    return this.name + " is an Animal with " + this.numberOflegs + " legs and its " + this.height+   " inches tall";
  }
}

class Domestic extends Animal{
  constructor(name, height,dateOfBirth, numberOflegs,speak){
    super(name, height,dateOfBirth, numberOflegs);
    this.speak = speak;
  }
  
  speak(voice){
    return this.speak;
  }
  
  type(){
    return `${this.name} is a dommestic animal and it ${this.speak}`;
  }
}

let dog = new Animal('dog', 5, 2015, 4 );
console.log(dog.type());
console.log(dog.age());


let cat = new Domestic('cat', 3, 2013, 4, 'mew');
console.log(cat.age());
