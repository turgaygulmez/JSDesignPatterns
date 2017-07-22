var Account = (function () {

    var amount = 0;

    var operations = {
        getLoan (val) {
            amount -= val;
        },
        payLoan(val) {
            amount += val;
        },
        checkAccountDetails() {
            console.log("current balance " + amount);
        }
    }

    function execute(name) {
        return operations[name] && operations[name].apply(operations, [].slice.call(arguments, 1));
    }

    return {
        execute: execute
    };
})();

Account.execute("getLoan", 2000);
Account.execute("payLoan", 1000);
Account.execute("payLoan", 500);
Account.execute("checkAccountDetails");
