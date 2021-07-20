const addButton = document.querySelector('.add-button');
const commericalUnit_Input = document.querySelector('.unit-input');
const countDIV = document.querySelector('.count');

let commericalUnit;

let pickedUnit = 0;

function addUnits() {
    commericalUnit = Number(commericalUnit_Input.value);
    
    pickedUnit += commericalUnit;

    return countDIV.innerHTML = pickedUnit;
}

commericalUnit_Input.addEventListener('focusout', addUnits)