
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
static myType(){
  console.log("animal");
}

  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

//creating object of a class


let dog = new Animal("dog" , 4)
console.log(dog);
console.log(dog.describe());
(Animal.myType());


// describe function can only be called on the object of the class
// static function can be called directly on the class