var array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    cardtemplate = document.getElementById("bingo"),
    resetButton = document.getElementById('reset'),
    addbutton = document.getElementById('addList'),
    generateButton = document.getElementById('generate'),
    hideButton = document.getElementById("hide"),
    arrayreadout = document.getElementById("displayArray");
hideButton.addEventListener("click", hidelist);
resetButton.addEventListener('click', reset);
addbutton.addEventListener('click', additem);
generateButton.addEventListener('click', generateArray);
setInterval(updatelist, 5)

function shuffle(someArray) {
    shuffled = someArray
    for (var i = someArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)),
            x = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = x;
    }
    console.log(shuffled);
}

function additem() {
    var input = document.getElementById("item").value,
        position = document.getElementById("position");
    array[position.value] = input;
    console.log(array);
    ++position.value
}

function generateArray() {
    shuffle(array);
    document.getElementById("content").hidden = false
    for (i = 0; i < 24; i++) {
        document.getElementById(i + 1).textContent = array[i];
    }
}

function hidelist() {
    if (arrayreadout.hidden == false) {
        arrayreadout.hidden = true
        hideButton.textContent = "Unhide List"
    } else {
        arrayreadout.hidden = false
        hideButton.textContent = "Hide List"
    }
}

function updatelist() {
    arrayreadout.textContent = ""
    for (i = 0; i < array.length; i++) {
        arrayreadout.textContent = arrayreadout.textContent + array[i] + " (" + i + "), "
        if (i == array.length - 1) {
            arrayreadout.textContent = arrayreadout.textContent + array[i] + " (" + i + ")"
        }
    }
}

function reset() {
    window.location.reload()
}
