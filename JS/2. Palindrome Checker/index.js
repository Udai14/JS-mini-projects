const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
    // split() -> splits word into an array based on the delimeter, which is an empty character here ,hence it splits the string into an array of chars
    // reverse() -> reverses an array
    // join() -> joins array into a string with the delimeter in bw every index
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);
    
    if(value === reverse) {
        alert("Palindrome!");
    } else {
        alert("Not a Palindrome!");
    } // use 2 or 3 '=' idk why

    input.value = "";
    //clears input
        
}