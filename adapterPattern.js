// old interface
function Customer() {
	this.name;
	this.number;
	this.address;

    this.setCustomer = function(name, number, address) {
    	// do some validation
        this.name = name;
		this.number = number;
		this.address = address;
		console.log(customer);
    }
}
 
// new interface we no longer have setCustomer function
function AdvancedCustomer() {
	this.name;
	this.number;
	this.address;

    this.setName = function(name) {
    	// do some validation
        this.name = name;
    }

    this.setNumber = function(number) {
    	// do some validation
        this.number = number;
    }

    this.setAddress = function(address) {
    	// do some validation
        this.address = address;
    }
}
 
// adapter interface
function CustomerAdapter() {
    var customer = new AdvancedCustomer();
 	
    return {
        setCustomer: function(name, number, address) {
            customer.setName(name);
            customer.setNumber(number);
            customer.setAddress(address);
            console.log(customer);
        }
    };
}
	
// old interface
var customer = new Customer();
customer.setCustomer("Turgay Gulmez", "00001111555", "Australia Brisbane Kangaroo point");

// with new interface
var adapter = new CustomerAdapter();
adapter.setCustomer("Turgay Gulmez", "00001111555", "Australia Brisbane Kangaroo point");