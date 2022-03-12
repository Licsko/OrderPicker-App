const newShopBTN = document.querySelector('.new-shop-button');

let pickedCount = [];

newShopBTN.addEventListener('click', szamol);

function szamol() {
    let pickingCount = Number(commericalUnit_Input.value);
    pickedCount.push(pickingCount);
    let pick = 0;
    
    for (let i = 0; i < pickedCount.length; i++) {
        pick += pickedCount[i];
    }
    
    return console.log(pick);
}
