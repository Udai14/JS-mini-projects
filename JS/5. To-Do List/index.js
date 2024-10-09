 let items = [];

 const itemsDiv = document.getElementById("items");
 const input = document.getElementById("itemInput");
 const storageKey = "items"

 function renderItems() {
    // function to render the list
    itemsDiv.innerHTML = null; // wipes current list and re-renders it

    for (const [idx,item] of Object.entries(items)) { //for every index,item in the list array
        const container = document.createElement("div"); //create a container
        container.style.marginBottom = "10px"; //give space b/w items

        const text = document.createElement("p") //create item
        // p is a block element, hence to put button on same line
        // we have to make it an inline element
        text.style.display = "inline";
        text.style.marginRight = "10px"; // space bw button and item
        text.textContent = item;

        const button = document.createElement("button"); //create delete button
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx); // wraps call of removeItem function in another function
        // otherwise js will execute removeItem regardless of whether its clicked
        
        container.appendChild(text);
        container.appendChild(button); //append to container
        itemsDiv.appendChild(container); //add container to itemsDiv
    }
 }

 function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems)
        items = JSON.parse(oldItems);
        //converts to js object
    renderItems();
 }

 function saveItems() {
    // local storage on user-end
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems); //overrides existing key called items

 } 

 function addItem() {    
    //function to take text from input box and add it to the list
    const value = input.value; // takes value of the input string
    if (!value) { // to not add empty string
        return;
    }
    items.push(value);
    renderItems();
    input.value = "" ; //clear input
    saveItems(); // save upon any changes
}

 function removeItem(idx) {
    //function to remove item from the list

    items.splice(idx, 1); // removes 1 element at given index
    renderItems(); // re-render the list
    saveItems(); // save upon any changes
 }

 document.addEventListener("DOMContentLoaded", loadItems)
 // when all the html is loaded ie DOM Content is loaded, we call loadItems