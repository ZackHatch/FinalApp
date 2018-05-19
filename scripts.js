var array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    template = document.getElementById("template"),
    resetButton = document.getElementById("reset"),
    addbutton = document.getElementById("addList"),
    generateButton = document.getElementById("generate"),
    hideButton = document.getElementById("hide"),
    importbutton = document.getElementById("import"),
    exportbutton = document.getElementById("export"),
    inputbox = document.getElementById("item"),
    position = document.getElementById("position"),
    displayparent = document.getElementById("displayparent"),
    arrayreadout = document.getElementById("displayArray"),
    unfriendly = document.getElementById("unfriendly"),
    printerbutton = document.getElementById("printerbutton");

hideButton.addEventListener("click", hidelist);
addbutton.addEventListener("click", additem);
generateButton.addEventListener("click", generatecards);
importbutton.addEventListener("click", importarray);
position.addEventListener("click", inputboxliveupdate);
exportbutton.addEventListener("click", exportarray);
printerbutton.addEventListener("click", printermode);
resetButton.addEventListener("click", () => {
    window.location.reload()
});

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
    array[position.value] = inputbox.value;
    console.log(array);
    if (position.value == 23) {
        position.value = 0
    } else {
        ++position.value
    }
    inputboxliveupdate()
}

function generatecards() {
    for (i = 0; i < players.value - 1; i++) {
        for (j = 0; j < 24; j++) {
            shuffle(array)
            document.getElementById(j + 1).textContent = array[i];
        }
        clone = template.cloneNode(true)
        document.getElementById("cards").appendChild(clone);
    }
}

function hidelist() {
    if (displayparent.hidden == false) {
        displayparent.hidden = true
        hideButton.textContent = "Unhide List"
    } else {
        displayparent.hidden = false
        hideButton.textContent = "Hide List"
    }
}

function updatelist() {
    arrayreadout.textContent = ""
    for (i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            arrayreadout.textContent = arrayreadout.textContent + array[i] + " (" + i + ")"
        } else {
            arrayreadout.textContent = arrayreadout.textContent + array[i] + " (" + i + "), "
        }
    }
}

function importarray() {
    var promptentry = prompt("Copy and paste the export list from another instance"),
        importedarray = promptentry.split(",");
    if (importedarray.length == 24) {
        array = importedarray
        alert("Import Successful")
        inputboxliveupdate()
    } else {
        alert("Import Array Invalid")
    }
}

function exportarray() {
    for (i = 0; i < array.length; i++) {
        if (array[i] == "") {
            complete = false
            break
        } else {
            complete = true
        }
    }
    if (complete == true) {
        alert("Hint: Ctrl-A then Ctrl-C")
        alert(array)
    } else {
        alert("Cannot export incomplete list")
    }
}

function inputboxliveupdate() {
    inputbox.value = array[position.value]
}

function printermode(event) {
    if (unfriendly.hidden == false) {
        unfriendly.hidden = true
        template.hidden = true
    } else if (unfriendly.hidden == true) {
        unfriendly.hidden = false
        template.hidden = false
    }
}
