const button = document.getElementsByClassName('button')[0]
const button2 = document.getElementsByClassName("button")[1]

const listElement = document.getElementById("list");
const content = document.getElementById("list2");

const createNewItem = document.getElementsByClassName("createNewItem")[0]
const createNewItemButton = createNewItem.lastElementChild
const input = createNewItem.firstElementChild;

const doneItem = document.getElementsByClassName("Done_Item")[0]
const inputDone = doneItem.firstElementChild;
const doneButton = doneItem.lastElementChild

const currentDate = new Date()
const dateNow = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate()
const date = document.getElementById("date")
date.innerHTML += dateNow


button.addEventListener("click", openToBeDone)
createNewItemButton.addEventListener("click", newItems)
createNewItemButton.addEventListener("click", openToBeDone)
// To Do

button2.addEventListener("click", openDone)
doneButton.addEventListener("click", newDoneItems)
doneButton.addEventListener("click", openDone)


// Done



function openToBeDone() {
    createNewItem.classList.toggle("active")
}


function newItems() {
    const toBeDone = document.createElement("div")
    toBeDone.classList.add("newElement")
    if(input.value != "") {
        toBeDone.innerHTML = `<p>${input.value}</p>`
        listElement.append(toBeDone)
    }
}
// Abri e cria elementos de afazeres



function openDone() {
    doneItem.classList.toggle("active")
}

function newDoneItems() {
    const toBeDone = document.createElement("div")
    toBeDone.classList.add("newElement")
    
    if (inputDone.value != "") {
        toBeDone.innerHTML = `<p>${inputDone.value}</p>`
        content.append(toBeDone)
    }
}
