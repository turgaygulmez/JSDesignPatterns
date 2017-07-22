function Employee(name) {
    this.name = name;
}

function Customer(name, number) {
    this.name = name;
    this.number = number
}

function EmployeeFactory() {

    this.create = function (name) {
        if (name && name.length > 3) {
            return new Employee(name);
        } else {
            throw Error("name has to be at least 3 chars");
        }

    };
}

function CustomerFactory() {

    this.create = function (name, number) {
        if (name && number && name.length > 3 && number.length >= 9) {
            return new Customer(name, number);
        } else {
            throw Error("name has to be at least 3 chars and number has to be at least 9 chars");
        }

    };
}

var people = [];
var employeeFactory = new EmployeeFactory();
var customerFactory = new CustomerFactory();

try {

    people.push(employeeFactory.create("Turgay Gulmez"));
    people.push(employeeFactory.create("David Copperfield"));
    people.push(customerFactory.create("Ayrton Senna", "123456789"));
    people.push(customerFactory.create("John Surtees", "123456789"));

} catch (ex) {
    console.log(ex.message);
}

console.table(people);
