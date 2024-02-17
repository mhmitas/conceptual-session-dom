// const allBtn = document.getElementsByClassName('add-btn')
// console.log(allBtn)

// function handleButtonsEvent() {

// }

function cartProductCount(e) {
    const cartCount = parseInt(getInnerText('cart-count'));
    const updateCartCount = cartCount + 1;
    setInnerText('cart-count', updateCartCount);
    console.log(e)
}

function sendInfoToCalculationArea(){
    document.getElementById('')
}

// uitility ------------------

function getInnerText(id) {
    const elementText = document.getElementById(id).innerText
    return elementText;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}