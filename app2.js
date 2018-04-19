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
    var array = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16"," s17", "s18"," s19", "s20", "s21", "s22", "s23", "s24"]
}
