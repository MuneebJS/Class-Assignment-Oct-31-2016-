
function removeDuplicates(Arr) {
    var match = Arr.slice()
    for (var i = 0; i < len; i++) {
        var match = Arr.slice(i, i + 1);
        for (var j = i + 1; j < len; j++) {
            if (match == Arr[j]) {
                Arr.splice(j--, 1);
            }
        }
    }
}

var arr1 = ["Salt", "Sugar", "Long", "Water"];
var arr2 = ["Water", "Apple", "Banana", "Mango"];
var arr3 = ["Salt", "Carret", "Brinjal", "Patato"];
var combStr = arr1.slice(0) + "," + arr2.slice(0) + "," + arr3.slice(0);
var newArr = combStr.split(",");
var finalArr = [];
var len = newArr.length;
removeDuplicates(newArr);
alert(newArr);
 
function table() {
    var userInput = Number(prompt("enter a number"));
    for (var i = 0; i < 10; i + userInput);
    
}