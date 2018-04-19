Start
var button = document.getElementById("item");
button.addEventListener('click', () => {
    document.getElementById('addList').textContent = putinarray()
});

function putinarray(){
    var input = document.getElementById("item").value;
   var array = [];
    array.push(input);
}
function random(array){
    var word = array.shuffle
    var phat = [Math.floor(Math.random(word)*array.length)]

}
