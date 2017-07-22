var Calculator = function (number) {

    this.add = function (value) {
        number += value;
        return this;
    };

    this.multiply = function (value) {
        number *= value;
        return this;
    };

    this.equals = function (callback) {
        callback(number);
    };
};

var result = new Calculator(10)
        .add(3)
        .add(2)
        .multiply(2)
        .equals(function (result) {
            console.log(result);
        });

// Output:
// 30