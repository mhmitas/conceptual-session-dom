const allButton = document.getElementsByClassName('add-btn')
console.log(allButton)

let count = 0;
for (const button of allButton) {
    button.addEventListener('click', function (e) {
        count += 1;
    })
}