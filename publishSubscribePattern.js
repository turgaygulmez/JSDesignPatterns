// Our subject
function Event() {
    this.handlers = [];
}

Event.prototype = {
    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    publish: function (o, scope) {
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

var mathInfoHandler = function (item) {
    console.log('match started ' + item);
};

var stadiumInfoHandler = function (item) {
    console.log('stadium enterence closed');
};

var ticketInfoHandler = function (item) {
    console.log('tickets are no longer available');
};

var soccerEvent = new Event();

soccerEvent.subscribe(mathInfoHandler);
soccerEvent.subscribe(stadiumInfoHandler);
soccerEvent.subscribe(ticketInfoHandler);
soccerEvent.publish('Besiktas - Chelsea');


