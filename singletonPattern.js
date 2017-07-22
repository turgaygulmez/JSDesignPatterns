var LogService = (function () {

    function Logger() {
        this.logs = [];
        this.add = function (type, message) {
            logs.push({
                type: type,
                message: message
            });
        }

        this.add = function (type, message) {
            this.logs.push({
                type: type,
                message: message
            });
        }

        this.printAll = function () {
            for (var i = 0; i < this.logs.length; i++) {
                console[this.logs[i].type](this.logs[i].message);
            }
        }
    }

    var instance;

    return {
        getInstance: function () {
            if (instance === undefined) {
                instance = new Logger();
            }
            return instance;
        }
    };
})();

var someServiceLogger = LogService.getInstance();

someServiceLogger.add("error", "this is an error");
someServiceLogger.add("info", "this is an info");

someServiceLogger.printAll();