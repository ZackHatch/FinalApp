var button = document.getElementById("item");
button.addEventListener('click', () => {
    document.getElementById('addList').textContent = putinarray()
});

function putinarray(){
    var input = document.getElementById("item").value;
   var someArray = str.split(",");
    someArray.push(input);
}

function shuffle (someArray) {
    for (var i = someArray.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var x = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = x;
    }
    console.log(someArray);
    return someArray;
}
function Array(){
    var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"," 17", "18"," 19", "20", "21", "22", "23", "24"]

function insertText () {
    document.getElementById('').innerHTML = "Some text to enter";
}
