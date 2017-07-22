function Phone (name) {
    this.screen = null;
    this.OS = null;
    this.color = null;

    this.toString = function () {
        console.log(this.screen + " " + this.OS + " " + this.color)
    }
}

function Manufacturer ()
{
    this.construct = function(builder)
    {
        builder.createInstance();
        builder.buildScreen();
        builder.buildOS();
        builder.buildColor();
        return builder.get();
    }
}

function AndroidPhoneBuilder() {
    this.phone = null;

    this.createInstance = function () {
        this.phone = new Phone();
    }

    this.buildScreen = function() {
        this.phone.screen = "6inch";
    };
 
    this.buildOS = function() {
        this.phone.OS = "Android";
    };

    this.buildColor = function() {
        this.phone.color = "White";
    };

    this.get = function () {
        return this.phone;
    }
}

function WindowsPhoneBuilder() {
    this.phone = null;

    this.createInstance = function () {
        this.phone = new Phone();
    }

    this.buildScreen = function() {
        this.phone.screen = "5inch";
    };
 
    this.buildOS = function() {
        this.phone.OS = "Windows";
    };

    this.buildColor = function() {
        this.phone.color = "Black";
    };

    this.get = function () {
        return this.phone;
    }
}

var manufacturer = new Manufacturer();
var androidPhoneBuilder = new AndroidPhoneBuilder();
var windowsPhoneBuilder = new WindowsPhoneBuilder();

var android1 = manufacturer.construct(androidPhoneBuilder);
var android2 = manufacturer.construct(androidPhoneBuilder);
var android3= manufacturer.construct(androidPhoneBuilder);
var windows1= manufacturer.construct(windowsPhoneBuilder);

android1.toString();
windows1.toString();