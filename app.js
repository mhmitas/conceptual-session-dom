const allButton = document.getElementsByClassName('add-btn')
// console.log(allButton)

let count = 0;
for (const button of allButton) {
    button.addEventListener('click', function (e) {
        count += 1;
        setInnerTextById('cart-count', count)

        // send info to cart container from card
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const placePrice = e.target.parentNode.childNodes[3].childNodes[1].innerText
        // console.log(placePrice)

        // send info to selected-place-container from card 
        const selectedPlaceContainer = document.getElementById('selected-place-container')
        const li = document.createElement('li')
        const nameDiv = document.createElement('div')
        const priceDiv = document.createElement('div')
        nameDiv.innerText = placeName;
        priceDiv.innerText = placePrice;
        selectedPlaceContainer.appendChild(li);
        li.appendChild(nameDiv);
        li.appendChild(priceDiv);

        // make total
        totalPrice('total-cost', placePrice)

    })
}


// make total
function totalPrice(id, value) {
    const total = document.getElementById(id).innerText
    const convertedTotal = parseInt(total)
    const sum = convertedTotal + parseInt(value)
    setInnerTextById(id, sum)
    grandTotalCost('other')
}


// make grand total
function grandTotalCost(category) {
    const total = document.getElementById('total-cost').innerText
    const convertedTotal = parseInt(total);
    if (category === 'bus') {
        setInnerTextById('grand-total', convertedTotal + 100)
    } else if (category === 'train') {
        setInnerTextById('grand-total', convertedTotal - 200)
    } else if (category === 'flight') {
        setInnerTextById('grand-total', convertedTotal + 500)
    } else {
        setInnerTextById('grand-total', convertedTotal)
    }
}



// ------------------------------
// Uitility -->

function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value;
}

function getBudgetValue(id) {
    const budgetInnerText = document.getElementById(id).innerText
    const budget = parseInt(budgetInnerText);
    return budget;
}