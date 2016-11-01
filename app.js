//create three arrays consisting multiple same elements and then add three of them with unique array which never consist double element.
function removeDuplicates(Arr) {
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

//This code is for table when user write a number in prompt following code give them a complete table of that number.

function table(promptValue) {
    for(var i = 1; i <= 10; i++) { 
        var multi = promptValue * i;
        var fullTable = document.write(promptValue +  " " + "*"  + " " +   " " + i  + " "  + "=" + " " + multi + " " + "<br>");
    } 
}
var userInput = Number(prompt("enter a number"));
table(userInput);


