function display(value) {
document.getElementById("result").value += value;
}

function calculate() {
var exp = document.getElementById("result").value;
if (exp) {
document.getElementById("result").value = eval(exp) ;
}
}

function clearScreen() {
document.getElementById("result").value = "";
}
