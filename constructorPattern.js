function Person( name, age) {
  this.name = name;
  this.age = age;
 
  this.toString = function () {
    return "I am " + this.name + " and " + this.age + " years old.";
  };
}
 
// Create new instances of the Person
var david = new Person( "David", 1989 );
var richard = new Person( "Richard", 1972 );
 
console.log( david.toString() );
console.log( richard.toString() );