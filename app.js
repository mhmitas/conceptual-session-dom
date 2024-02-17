const allButton = document.getElementsByClassName('add-btn')


/*
let count = 0;
for (const btn of allButton) {
    btn.addEventListener('click', function (e) {

        // update cart count
        count = count + 1;
        setInnerText('cart-count', count)

        // get selected place and price -
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        // where will i send -
        const selectedContainer = document.getElementById('selected-place-container');

        // create new element and send them -
        const li = document.createElement('li')
        const placeNameDiv = document.createElement('div')
        const priceDiv = document.createElement('div')
        placeNameDiv.innerText = placeName;
        priceDiv.innerText = `${price} $`;
        selectedContainer.appendChild(li)
        li.appendChild(placeNameDiv)
        li.appendChild(priceDiv)
        
        // make total and update total-
        getTotalAndUpdate('total-cost', price)
        // extra charge add. 

        // make grand total and update 

    })
}
*/

//---------

let count = 0;

for(const button of allButton){
    button.addEventListener('click', function(e){
        // update cart count
        count = count+1;
        setInnerText('cart-count',count)

        // send info to calculation area after click on add button
        // get information from card via clicked btn
        const productName = e.target.parentNode.childNodes[1].innerText
        const productPrice = e.target.parentNode.childNodes[3].childNodes[1].innerText

        // create element to send productPrice and productName to calculation area.
        const selectedPlaceContainer = document.getElementById('selected-place-container')
        console.log(selectedPlaceContainer)
        const li = document.createElement('li')

        const name = document.createElement('div')
        name.innerText = (productName)
        const price = document.createElement('div')
        price.innerText = (productPrice)

        selectedPlaceContainer.appendChild(li)
        li.appendChild(name)
        li.appendChild(price)


    })
}







// -----------------------------------------------------------------
// ---utility---
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function getTotalAndUpdate(elementId, value) {
    const valueNum = parseInt(value)
    const getString = document.getElementById(elementId).innerText
    const makeNum = parseInt(getString)
    const sum = makeNum + valueNum;
    setInnerText(elementId, sum)
}







//---------------------------------------