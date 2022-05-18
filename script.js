const button = document.getElementsByClassName('button')[0]
const button2 = document.getElementsByClassName("button")[1]


const listElement = document.getElementById("list");
const content = document.getElementById("list2");

// Content To be Done and Content Done


const createNewItem = document.getElementsByClassName("createNewItem")[0]
const createNewItemButton = createNewItem.lastElementChild
const input = createNewItem.firstElementChild;
// New element Not Done

const doneItem = document.getElementsByClassName("Done_Item")[0]
const inputDone = doneItem.firstElementChild;
const doneButton = doneItem.lastElementChild

// New element Done


const currentDate = new Date()
const dateNow = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate()
const date = document.getElementById("date")
date.innerHTML += dateNow
// Get Today Date




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
    input.value = ""
}


function newItems() {
    const toBeDone = document.createElement("div")
    toBeDone.classList.add("newElement")
    if(input.value != "") {
        toBeDone.innerHTML = `<p>${input.value}</p> <button><img src='assets/images/close.png'></button>`
        listElement.append(toBeDone)
        input.value = ""
    }

    function remove () {
        toBeDone.remove()
    }
    toBeDone.lastElementChild.addEventListener("click", remove)
}
// Abri e cria elementos de afazeres



function openDone() {
    doneItem.classList.toggle("active")
    inputDone.value = ""
}

function newDoneItems() {
    const toBeDone = document.createElement("div")
    toBeDone.classList.add("newElement")
    
    if (inputDone.value != "") {
        toBeDone.innerHTML = `<p>${inputDone.value}</p> <button><img src='assets/images/close.png'></button>`
        content.append(toBeDone)
        inputDone.value = ""
    }

    function remove () {
        toBeDone.remove()
    }
    toBeDone.lastElementChild.addEventListener("click", remove)
}
