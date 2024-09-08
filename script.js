const billInput = document.getElementById('bill-input');
const percentageButtons = document.querySelectorAll('.percentage-button');
const peopleNumber = document.getElementById('people-number');
const form = document.querySelectorAll('form');
const tipResult = document.getElementById('tip-result');
const totalResult = document.getElementById('total-result');
const resetButton = document.getElementById('reset-button');

let selectedBill;
let selectedTip;
let selectedPeopleNumber;

form.forEach(form => form.addEventListener('submit', (event) => {
    event.preventDefault();
}))

form.forEach(form => form.addEventListener('input', () => calculateTipAmount()))

percentageButtons.forEach((btn) => {
    
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        percentageButtons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');
        
        selectedTip = btn.getAttribute('data-percentage');
        
    })
})

billInput.addEventListener('input', () => {
    selectedBill = billInput.value;
})

peopleNumber.addEventListener('input', () => {
    selectedPeopleNumber = peopleNumber.value;
})

resetButton.addEventListener('click', () => {
    tipResult.textContent = '$0.00';
    totalResult.textContent = '$0.00';
    percentageButtons.forEach(button => button.classList.remove('active'));
    peopleNumber.value = '0';
    billInput.value = '0';
    selectedBill = '0';
    selectedTip = '0';
    selectedPeopleNumber = '0';
})

function calculateTipAmount() {

    let personTip = selectedBill * (selectedTip / 100) / selectedPeopleNumber
    let personTotal = personTip + selectedBill / selectedPeopleNumber
    
    tipResult.textContent = '$' + personTip.toFixed(2);
    totalResult.textContent = '$' + personTotal.toFixed(2);

}