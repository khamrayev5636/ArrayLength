const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const elText = document.querySelector(".list");

const array = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    elText.classList.add("list-js")
    
    const obj = {
        number : "",
        elInputValue : elInput.value,
    };
    
    array.push(obj);
    
    elForm.reset();
    elText.textContent = "";
    
    for(let i = 0; i < array.length; i++){
        
        const newItem = document.createElement("li");
        newItem.classList.add("item-js" , "shadow-lg");

        array[i].number = i + 1;

        const newNumber = document.createElement("span");
        newNumber.textContent = array[i].number + ".";
        newNumber.classList.add("me-2" ,"fs-5" ,"text-danger")
        newItem.appendChild(newNumber);

        const newInput = document.createElement("input");
        newInput.setAttribute("type" , "checkbox");
        newInput.classList.add("form-check-input" , "fs-5");
        newItem.appendChild(newInput);

        const elName = document.createElement("span");
        elName.textContent = array[i].elInputValue;
        elName.classList.add("ms-3" , "fw-bold" , "fs-5");
        newItem.appendChild(elName);

        const newBox = document.createElement("div");
        newBox.classList.add("mt-3");
        const newAdd = document.createElement("button");
        newAdd.classList.add("add-js");
        newAdd.textContent = "Add"
        const newRemove = document.createElement("button");
        newRemove.classList.add("remove-js")
        newRemove.textContent = "Remove";
        newBox.appendChild(newAdd);
        newBox.appendChild(newRemove);
        newItem.appendChild(newBox)

        elText.appendChild(newItem);
        
        newRemove.addEventListener("click" , function(){
    
            newItem.classList.add("d-none");
            array.length = 0;
    
        })
    }

})