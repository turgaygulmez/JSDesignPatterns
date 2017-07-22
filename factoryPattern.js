function EmployeeFactory() {
    this.createEmployee = function (type) {
        var employeeType;
        switch (type) {
            case "fulltime":
                employeeType = FullTime;
                break;
            case "parttime":
                employeeType = PartTime;
                break;
            case "temporary":
                employeeType = Temporary;
                break;
            case "contractor":
                employeeType = Contractor;
                break;
        }

        return new employeeType();
    }
}

var FullTime = function () {
    this.monthly = "$3000";
};

var PartTime = function () {
    this.hourly = "$25";
};

var Temporary = function () {
    this.hourly = "$20";
};

var Contractor = function () {
    this.hourly = "$15";
};


var employees = [];
var factory = new EmployeeFactory();

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("contractor"));

console.table(employees);