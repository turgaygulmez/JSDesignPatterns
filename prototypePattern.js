function EmployeePrototype(proto) {
    this.proto = proto;
 
    this.clone = function () {
        var emp = new Employee();
 
        emp.first = proto.first;
        emp.last = proto.last;

        return emp;
    };
}
 
function Employee(first, last) {
    this.first = first;
    this.last = last;
}

var proto = new Employee("empty", "empty");
var prototype = new EmployeePrototype(proto);

var emp1 = prototype.clone();
emp1.first = "David";

var emp2 = prototype.clone();

console.log(emp1.first);
console.log(emp2.first);

// Output: 
// David
// empty