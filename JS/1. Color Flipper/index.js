const body = document.getElementsByTagName("body")[0];
//returns a list of elements by tagname
//as there is only 1 body, it will be at index 0

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
