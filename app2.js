Start
var enterbutton = document.getElementById("textbox");
enterbutton.addEventListener('click', () => {
    document.getElementById('output').textContent = bingocheck()
});

function putingrid(){
    var input = document.getElemenById("textbox").value;
   var array = [];
    array.push(input);

}
