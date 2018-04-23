function putinarray() {
    var input = document.getElementById("item").value;
    var someArray = str.split(",");
    someArray.push(input);
}

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


var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", " 17", "18", " 19", "20", "21", "22", "23", "24"]

function insertText() {
    document.getElementById('').innerHTML = "Some text to enter";
}

//for loop that adds the input to each cell
//cpounter that shows how many things left you can oninput
//generate button that uses for loop to put t into the cells
//alert that pops up if you try to generate before it is full
//alert that pops up if you try to add more than 24



var button = document.getElementById('addList');
button.addEventListener('click', additem)

function additem() {
    var input = document.getElementById("item").value;
    var li = document.createElement("li");
    var deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.className = "delete"
    deletebutton.addEventListener('click', () => {
        deletebutton.parentElement.remove();
    });
    for (i = 0; i < 24; i++) {
document.getElementById(i).textContent = input
    }
    li.textContent = input + "";
    li.appendChild(deletebutton);
    return document.getElementById("ul").appendChild(li);
}
