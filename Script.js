function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let p = document.getElementById('display').value;
    document.getElementById('display').value = eval(p);
}
