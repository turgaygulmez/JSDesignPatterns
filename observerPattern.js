function ObserverList() {
    this.observerList = [];

    this.add = function (obj) {
        return this.observerList.push(obj);
    };

    this.get = function (index) {
        return this.observerList[index];
    }

    this.count = function () {
        return this.observerList.length;
    }
}

function Temperature() {
    this.observers = new ObserverList();

    this.addObserver = function (observer) {
        this.observers.add(observer);
    };

    this.notify = function (context) {
        var observerCount = this.observers.count();
        for (var i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context + " degree");
        }
    };
}

// Each observer has different behavior 
function Laptop() {
    this.update = function (notification) {
        console.info(notification);
    }
}

function Server() {
    this.update = function (notification) {
        console.error(notification);
    }
}

var laptop = new Laptop('laptop');
var server = new Server('server');

var temperature = new Temperature();

temperature.addObserver(laptop);
temperature.addObserver(server);

temperature.notify(-50);