var Device = function (model) {
    this.connectionAdapter = null;
    this.model = model;

    this.connect = function (to) {
        this.connectionAdapter.connect(this, to);
    }
};

var Desktop = function (model) {
    Device.call(this, model);
}

Device.prototype = Object.create(Device.prototype);
Device.prototype.constructor = Device;

var Laptop = function (model) {
    Device.call(this, model);
}

Laptop.prototype = Object.create(Device.prototype);
Laptop.prototype.constructor = Laptop;


var Adaptor = function () {
    var devices = {};

    return {

        register: function (device) {
            devices[device.model] = device;
            device.connectionAdapter = this;
        },

        connect: function (from, to) {
            // connection logic has a central point of control 
            console.log('connection established from ' + from.model + ' to ' + to.model);
        }
    };
};


var lenovo = new Laptop("Lenovo 214");
var lenovo2 = new Laptop("Lenovo 515");
var hp = new Desktop("hp 412");

var adaptor = new Adaptor();

adaptor.register(lenovo);
adaptor.register(lenovo2);
adaptor.register(hp);

lenovo.connect(lenovo2);

hp.connect(lenovo);
