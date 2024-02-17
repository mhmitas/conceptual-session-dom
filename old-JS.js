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

for (const button of allButton) {
    button.addEventListener('click', function (e) {
        // update cart count
        count = count + 1;
        setInnerText('cart-count', count)

        // send info to calculation area after click on add button
        // get information from card via clicked btn
        const productName = e.target.parentNode.childNodes[1].innerText
        const productPrice = e.target.parentNode.childNodes[3].childNodes[1].innerText

        // create element to send productPrice and productName to calculation area.
        const selectedPlaceContainer = document.getElementById('selected-place-container')
        const li = document.createElement('li')

        const name = document.createElement('div')
        name.innerText = (productName)
        const price = document.createElement('div')
        price.innerText = (productPrice)

        selectedPlaceContainer.appendChild(li)
        li.appendChild(name)
        li.appendChild(price)

        // make total and send them
        totalCost('total-cost', productPrice)

        // make grand total


    })
}







// -----------------------------------------------------------------
// ---utility---
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function totalCost(elementId, value) {
    const totalCostString = document.getElementById(elementId).innerText
    const totalCostNum = parseInt(totalCostString)
    const total = totalCostNum + parseInt(value);
    setInnerText(elementId, total)
}

function grandTotalCost(category) {
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    if (category === 'bus') {
        console.log('convertedTotalCost', convertedTotalCost + 100)
        setInnerText('grand-total', convertedTotalCost + 100)
    } else if (category === 'train') {
        console.log('convertedTotalCost', convertedTotalCost - 200)
        setInnerText('grand-total', convertedTotalCost - 200)
    } else if (category === 'flight') {
        console.log('convertedTotalCost', convertedTotalCost + 500)
        setInnerText('grand-total', convertedTotalCost + 500)
    }else{
        console.log('convertedTotalCost', convertedTotalCost)
        setInnerText('grand-total', convertedTotalCost)
    }
}





//---------------------------------------