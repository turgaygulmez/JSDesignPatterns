function Sandwich() {
    // basic sandwich cost
    this.cost = function () {
        return 10;
    };
}

/* Decorator 1 */
function AddBacon(sandwich) {
    var cost = sandwich.cost();
    sandwich.cost = function () {
        return cost + 5;
    }
}

/* Decorator 2 */
function AddBlackForestHam(sandwich) {
    var cost = sandwich.cost();
    sandwich.cost = function () {
        return cost + 4;
    }
}

/* Decorator 3 */
function AddGenoaSalami(sandwich) {
    var cost = sandwich.cost();
    sandwich.cost = function () {
        return cost + 3;
    }
}

var sandawitch = new Sandwich();

AddBacon(sandawitch);
AddBlackForestHam(sandawitch);
AddGenoaSalami(sandawitch);

console.log("Total Cost is: " + sandawitch.cost() + " $");
// OUTPUT:
// Total Cost is: 22 $