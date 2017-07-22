var TourismAgency = function() {
    this.airline = null;
};
 
TourismAgency.prototype = {
    setStrategy: function(airline) {
        this.airline = airline;
    },
 
    calculate: function(tour) {
        return this.airline.calculate(tour);
    }
};
 
var Emirates = function() {
    this.calculate = function(tour) {
        // complex calculation based on the tour
        return "$5000";
    }
};
 
var PegasusAirlines = function() {
    this.calculate = function(tour) {
        // complex calculation based on the tour
        return "$4000";
    }
};

var TurkishAirlines = function() {
    this.calculate = function(tour) {
        // complex calculation based on the tour
        return "$7000";
    }
};
 
var tour = { from: "Wroclaw", to: "Antalya", numberOfPeople: 20 };

var emirates = new Emirates();
var pegasusAirlines = new PegasusAirlines();
var turkishAirlines = new TurkishAirlines();

var tourismAgency = new TourismAgency();

tourismAgency.setStrategy(emirates);
console.log(tourismAgency.calculate(tour));

tourismAgency.setStrategy(pegasusAirlines);
console.log(tourismAgency.calculate(tour));

tourismAgency.setStrategy(turkishAirlines);
console.log(tourismAgency.calculate(tour));
