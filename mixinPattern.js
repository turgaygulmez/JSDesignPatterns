var Car = function (settings) {
    this.model = settings.model;
    this.year = settings.year;
};

var Plane = function (settings) {
    this.model = settings.model;
    this.year = settings.year;
};

var DriveMixin = function () { };

DriveMixin.prototype.driveForward = function () {
    console.log("driving forward");
};

DriveMixin.prototype.driveBackward = function () {
    console.log("driving backward");
};


function extend(classA, classB) {
    var argLength = len = arguments.length - 1;

    for (var i = 2; i <= argLength; i++) {
        classA.prototype[arguments[i]] = classB.prototype[arguments[i]];
    }
}

extend(Car, DriveMixin, "driveForward", "driveBackward");
extend(Plane, DriveMixin, "driveForward");

var car = new Car({
    model: "Mazda 3",
    color: 2010
});

var plane = new Plane({
    model: "P-51 HHH",
    color: 1995
});

car.driveForward();
car.driveBackward();

// Outputs:
// driving forward
// driving backward

plane.driveForward();
plane.driveBackward();

// Outputs:
// driving forward
// plane.driveBackward is not a function