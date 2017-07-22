var Person = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {

    saveState: function () {
        var memento = JSON.stringify(this);
        return memento;
    },

    restoreState: function (memento) {
        var restored = JSON.parse(memento);
        this.name = restored.name;
        this.street = restored.street;
        this.city = restored.city;
        this.state = restored.state;
    }
}

var MomentoHistory = function () {
    this.mementos = {};

    this.add = function (key, memento) {
        this.mementos[key] = memento;
    },

    this.get = function (key) {
        return this.mementos[key];
    }
}

var turgay = new Person("Turgay Gulmez", 28);
var historyIncrementer = 0;
var momentoHistory = new MomentoHistory();

// save first state state
momentoHistory.add(historyIncrementer++, turgay.saveState());

// change name
turgay.name = "Abc Abc";

// save second state state
momentoHistory.add(historyIncrementer++, turgay.saveState());

// change name again
turgay.name = "Www Bbb";

console.log(turgay.name);
// OUTPUT: 
// Www Bbb

// restore previous state
turgay.restoreState(momentoHistory.get(--historyIncrementer));

console.log(turgay.name);
// OUTPUT: 
// Abc Abc

// restore previous state
turgay.restoreState(momentoHistory.get(--historyIncrementer));

console.log(turgay.name);
// OUTPUT: 
// Turgay Gulmez
