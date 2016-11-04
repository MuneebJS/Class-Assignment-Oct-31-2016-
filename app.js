
//This code is for table when user write a number in prompt following code give them a complete table of that number.

function table(promptValue) {
    for(var i = 1; i <= 10; i++) { 
        var multi = promptValue * i;

        var fullTable = document.write(promptValue + " * " + i + " = " + multi + "<br>");
    } 
}
var userInput = Number(prompt("Enter a ending number for table"));
table(userInput);

function diamondPattern(num) {
for(var i = num; i <= num; i++) {
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i + i
     + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i + i + i +"<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i + i + i  + i + "<br>"
     + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i + i + i + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i + i +  "<br>"
      + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + i +  "<br>"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + i + "<br>"
      + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + "<br>");
    }    
}
document.write("<h3>" + "Diamond Pattern" + "<br>")
var charForPattern = "*"
diamondPattern(charForPattern);
diamondPattern(charForPattern);  

var rangeForFibonacci = prompt("Enter a number for fibonacci series");
var rangeF = parseInt(rangeForFibonacci);
var first,second,next;
first = 1
second = first;

function fibonacciSeries() {
    for(var i = 1; i < rangeF; i++) {
        if(i == 0) {
            document.write(first + " ");
            continue;
        }
        if(i == 1) {
            document.write(second + " ");
            continue;
        }
        next = first + second;
        first = second;
        second = next;
        document.write(next + " ");
    }
}
document.write("<h3>" + "Fibonacci Series : " + "<br>")
fibonacciSeries();

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
document.write("<h2>" + "First Array : " + arr1 + "<br>" + "Second Array : " + arr2 + "<br>" + "Third Array : " + arr3 + "<br>" +
 "Combine Array : " + newArr + "<br>")
