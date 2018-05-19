var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]

function shuffle(someArray) {
    for (var i = someArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)),
            shuffled = someArray
            x = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = x;
    }
    console.log(shuffled);
}

var button = document.getElementById('addList'),
    position = document.getElementById("position"),
    j = 0;
button.addEventListener('click', additem)

function additem() {
    var input = document.getElementById("item").value;
    array[position.value] = input;
    console.log(array);
    ++position.value
}

var generateButton = document.getElementById('generate');
generateButton.addEventListener('click', generateArray)

function generateArray() {
    shuffle(array);
    document.getElementById("content").hidden = false
    for (i = 0; i < 24; i++) {
        document.getElementById(i + 1).textContent = array[i];
    }
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset)

function reset() {
   window.location.reload()
}

var hideButton = document.getElementById("hide");
hideButton.addEventListener("click", hidecard);

function hidecard() {
    document.getElementById("content").hidden = true
}

setInterval(update, 5);
function update() {
    document.getElementById("displayArray").textContent = "List of entries: " + array
}
