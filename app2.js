Start
var button = document.getElementById("item");
button.addEventListener('click', () => {
    document.getElementById('addList').textContent = putinarray()
});

function putinarray(){
    var input = document.getElementById("item").value;
   var someArray = [];
    array.push(input);
}

function shuffle (someArray) {
    for ( var i = someArray.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var x = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = x;
    }
    return someArray;
}
