var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", " 17", "18", " 19", "20", "21", "22", "23", "24"]

function shuffle(someArray) {
    for (var i = someArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = x;
    }
    console.log(someArray);
    return someArray;
}

function insertText() {
    document.getElementById('').innerHTML = "Some text to enter";
}

var button = document.getElementById('addList'),
    j = 0
button.addEventListener('click', additem)

function additem() {
    var input = document.getElementById("item").value;
    var li = document.createElement("li");
    li.textContent = input + "";
    array[j] = input;
    console.log(array);
    j++
    return document.getElementById("displayArray").textContent = array;
}

var generateButton = document.getElementById('generate');
generateButton.addEventListener('click', generateArray)

function generateArray() {
    shuffle(array);
    for (i = 0; i < 24; i++) {
        document.getElementById(i + 1).textContent = array[i];
    }
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset)

function reset() {
   window.location.reload()
}
