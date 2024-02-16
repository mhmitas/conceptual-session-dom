const allButton = document.getElementsByClassName('add-btn')

let count = 0;
for (const btn of allButton) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        setInnerText('cart-count', count)
        // get selected place and price -
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        // create new element and send them -
        
    })
}




// ---utility---
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}