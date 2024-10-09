const textbox = document.getElementById('textbox');
const toFarhenheit = document.getElementById('toFarhenheit');
const toCelcius = document.getElementById('toCelcius');
const result = document.getElementById('result');
let temp;

function convert() {
    if(toFarhenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}° F`; 
    } else if(toCelcius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9) ;
        result.textContent = `${temp.toFixed(1)}° C`; 
    } else {
        result.textContent = "Select a unit";
    }
}