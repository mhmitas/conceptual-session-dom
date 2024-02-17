const allButton = document.getElementsByClassName('add-btn')
// console.log(allButton)

let count = 0;
for (const button of allButton) {
    button.addEventListener('click', function (e) {
        count += 1;
        setElementById('cart-count', count)

        // send info to cart container from card
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const placePrice = e.target.parentNode.childNodes[3].childNodes[1].innerText
        // console.log(placePrice)
        const selectedPlaceContainer = document.getElementById('selected-place-container')
        // console.log(selectedPlaceContainer)
        const li = document.createElement('li')
        const nameDiv = document.createElement('div')
        const priceDiv = document.createElement('div')
        nameDiv.innerText = placeName;
        priceDiv.innerText = placePrice;
        selectedPlaceContainer.appendChild(li);
        li.appendChild(nameDiv);
        li.appendChild(priceDiv);

        // make total
        const total = document.getElementById('total-cost').innerText
        const convertedTotal = parseInt(total)
        const sum = convertedTotal + parseInt(placePrice)
        setElementById('total-cost', sum)

        // deal with budget
        const budget = document.getElementById('budget').innerText
        const convertedBudget = parseInt(budget);
        const leftBudget = convertedBudget - parseInt(placePrice);
        setElementById('budget',leftBudget)
    })
}


// make grand total
function grandTotalCost(category) {
    const total = document.getElementById('total-cost').innerText
    const convertedTotal = parseInt(total);
    if (category === 'bus') {
        setElementById('grand-total', convertedTotal + 100)
    } else if (category === 'train') {
        setElementById('grand-total', convertedTotal - 200)
    } else if (category === 'flight') {
        setElementById('grand-total', convertedTotal + 500)
    } else {
        setElementById('grand-total', convertedTotal)
    }
}


// ------------------------------
// Uitility -->

function setElementById(id, value) {
    document.getElementById(id).innerText = value;
}