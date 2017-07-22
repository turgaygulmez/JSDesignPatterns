var CustomString = (function () {
 
		// scope functions and variables
        var str = "";

        function get () {
        	return str;
        }
 
        function set(val) {
            str = val;
        }
 
        function removeFirstIndex() {
            if (str.length > 1) {
            	str = str.substring(1, str.length);
            }
        }

        function addCharAfterEach (char) {
        	var temp = "";
        	for (var i = 0; i < str.length; i++) {
        		temp += str[i];
        		if (i != str.length - 1) {
        			temp += char;
        		}
        	}
        	str = temp;
        }
 
        // public API
 
        return {
            get: get,
            set: set,
            removeFirstIndex: removeFirstIndex,
            addCharAfterEach: addCharAfterEach
        };
})();

CustomString.set("myexample");

// accessing str outside the scope causes error 

console.log(str);

// Output: Uncaught ReferenceError: str is not defined

CustomString.removeFirstIndex();
CustomString.removeFirstIndex();

console.log(CustomString.get());
// Output : example

CustomString.addCharAfterEach("-");

console.log(CustomString.get());
// Output : e-x-a-m-p-l-e