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

        // 

        
    })
}





// ------------------------------
// Uitility -->

function setElementById(id, value) {
    document.getElementById(id).innerText = value;
}