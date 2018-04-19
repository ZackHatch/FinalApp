Start
var enterbutton = document.getElementById("textbox");
enterbutton.addEventListener('click', () => {
    document.getElementById('output').textContent = bingocheck()
});

function putinarray(){
    var input = document.getElemenById("item").value;
   var array = [];
    array.push(input);
}
function random(array){
    var word = array.pop
    return Math.random(word)

}
