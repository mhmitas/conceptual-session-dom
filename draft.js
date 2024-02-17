// const allBtn = document.getElementsByClassName('add-btn')
// console.log(allBtn)

// function handleButtonsEvent() {

// }

function cartProductCount() {
    const cartCount = parseInt(getInnerText('cart-count'));
    const updateCartCount = cartCount + 1;
    setInnerText('cart-count', updateCartCount);
}

// uitility ------------------

function getInnerText(id) {
    const elementText = document.getElementById(id).innerText
    return elementText;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}