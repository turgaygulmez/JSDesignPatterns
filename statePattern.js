var Construct = function () {
    var currentState = new BreakGround(this);

    this.change = function (state) {
        currentState = state;
        currentState.start();
    };

    this.beginConstruct = function () {
        console.log("started");
        currentState.start();
    };
}

var BreakGround = function (construct) {
    this.construct = construct;

    this.start = function () {
        setTimeout(function () {
            console.log("Break Ground");
            construct.change(new Excavation(construct));
        }, 3000);
    }
};

var Excavation = function (construct) {
    this.construct = construct;

    this.start = function () {
        setTimeout(function () {
            console.log("Excavation");
            construct.change(new Foundation(construct));
        }, 3000);
    }
};

var Foundation = function (construct) {
    this.construct = construct;

    this.start = function () {
        setTimeout(function () {
            console.log("Foundation");
            construct.change(new Certification(construct));
        }, 3000);
    }
};

/*
Some more steps
*/

var Certification = function (construct) {
    this.construct = construct;

    this.start = function () {
        setTimeout(function () {
            console.log("Certification");
            console.log("completed");
        }, 3000);
    }
};

var construct = new Construct();
construct.beginConstruct();