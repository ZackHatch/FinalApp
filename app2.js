Start
var enterbutton = document.getElementById("textbox");
enterbutton.addEventListener('click', () => {
    document.getElementById('output').textContent = bingocheck()
});

function putinarray(){
    var input = document.getElemenById("textbox").value;
   var array = [];
    array.push(input);
}
function random(array){
    return Math.random(array)
}
