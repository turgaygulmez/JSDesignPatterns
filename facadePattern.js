var Credit = function (name) {
    this.name = name;
}

Credit.prototype = {

    apply: function (amount) {

        var result = "approved";

        switch (false) {
            case new Bank().verify(this.name):
                result = "you don't have a bank account";
                break;
            case new Availability().check(this.name):
                result = "you don't have enough income for this credit";
                break;
            case new Background().check(this.name):
                result = "you are in the black list";
                break;
        }

        return this.name + " your application result: " + result;
    }
}

var Bank = function () {
    this.verify = function (name, amount) {
        return true;
    }
}

var Availability = function () {
    this.check = function (name) {
        return false;
    }
}

var Background = function () {
    this.check = function (name) {
        return true;
    }
}

var credit = new Credit("David Bechham");
var result = credit.apply("$100,000");

console.log(result);
