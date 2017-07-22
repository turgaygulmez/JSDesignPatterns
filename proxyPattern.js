function Temperature() {
    this.getTemperatureByCity = function (city) {
        // send request to get the temperature by country
        var temp = null;
        switch (city) {
            case "London":
                temp = 23;
                break;
            case "Paris":
                temp = 30;
                break;
        }
        return temp;
    };
}

function TemperatureProxy() {
    var tempCache = {};
    return {
        getTemperatureByCity: function (city) {
            if (!tempCache[city]) {
                var temp = new Temperature();
                tempCache[city] = temp.getTemperatureByCity(city);
            }
            return tempCache[city];
        }
    };
};

var temp = new TemperatureProxy();

console.log(temp.getTemperatureByCity("London"));
console.log(temp.getTemperatureByCity("Paris"));
console.log(temp.getTemperatureByCity("London"));
console.log(temp.getTemperatureByCity("London"));
