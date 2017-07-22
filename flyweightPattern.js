var Car = function ( model, year, color, rego, VIN ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.rego = rego;
    this.VIN = VIN; // unique ID
};

var CarFactory = (function () {
  var existingCars = {};
 
  return {
    createCar: function ( settings ) {
      if ( !!existingCars[settings.VIN] ) {
        return existingCars[settings.VIN];
      } else {
        // convert object values to array and add null 
        var args = [null].concat(Object.values(settings));
        // pass array as constructor arguments
        var car = new (Function.prototype.bind.apply( Car, args ));
        existingCars[settings.VIN] = car;
        return car;
      }
    }
  };
})();

var RentCarManager = (function () {
 
  var rentCarRecords = {};
 
  return {
    // add a new car records into rentCarRecords
    addCarRecord: function ( id, carInfo, renter, checkoutDate, dueReturnDate ) {
 
      var car = CarFactory.createCar( carInfo );
 
      rentCarRecords[id] = {
        renter: renter,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        car: car
      };
    }
  };
})();


var car1 = {
  model: "Audi 3",
  year: 2005,
  color: "red",
  rego: "34GB535",
  VIN:"421WERGR3423453"
};

// all those 3 records has the same car information and will point to the same car object
RentCarManager.addCarRecord(1001, car1, "Turgay Gulmez", "07/20/2017", "07/23/2017");
RentCarManager.addCarRecord(1002, car1, "Turgay Gulmez", "07/24/2017", "07/25/2017");
RentCarManager.addCarRecord(1003, car1, "Turgay Gulmez", "07/26/2017", "07/29/2017");
