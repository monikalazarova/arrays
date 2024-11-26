let groceriesNames=["Eggs", "Onion", "Peppers", "Cheese"]//declaring outside the function

function listGroceries(){
    let ul=document.getElementById("groceryList");// access the <ul> element by using getElementById()
    ul.innerHTML="";//Clear the existing list items

    //using a for loop to traverse the grocery names array and add them to the list
    for (let i=0;i<groceriesNames.length; i++) {
        let li=document.createElement("li"); // creating a list item for the groceries
        li.textContent=groceriesNames[i];// setting the text 
        ul.appendChild(li);//append the list with the grocieries to the ul 
    }
}

function addToEnd(){
    groceriesNames.push(prompt("Pleaase enter a grocery item"));// key line - if I want to add groceries at the end 
    listGroceries();// reusing the function so the page will refresh and update the list
}
function removeFromEnd(){
    //groceriesNames.pop();// remove groceries at the end 
    alert("Removing "+groceriesNames.pop());// adding an alert function saying what have been removed from our list prior removing it
    listGroceries();// reusing the function so the page will refresh and update the list
}
function addToStart(){
    groceriesNames.unshift(prompt("Please enter a grocery item"));// add groceries to the start
    listGroceries();// reusing the function so the page will refresh and update the list
}
function removeFromStart(){
    groceriesNames.shift();// we can do the same thing here with the alert
    listGroceries();// reusing the function so the page will refresh and update the list
}
function addToMiddle(){//adding groceries in the middle
    groceriesNames.splice(2,0, prompt("Please enter a grocery item"));// splice function - adding the parameters, I want to start at position 2 and then I do not want to remove any items from the list, and the third argument- promting the user to add an item to the list
    listGroceries();
}