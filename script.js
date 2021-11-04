//inputs
const bill = document.querySelector('.bill-input');
const numberPerson = document.querySelector('.number-of-people-input');
const displayTipAmount = document.querySelector('.tip-amount');
const displayTotalAmount = document.querySelector('.total-amount');
const custom = document.querySelector('.custom');

numberPerson.addEventListener('input', checkIfNumIs0);
function checkIfNumIs0(){
    if (parseInt(numberPerson.value) ==0){
        numberPerson.classList.add('active');
        document.querySelector('.zero').classList.add('active');
    }else{
        numberPerson.classList.remove('active');
        document.querySelector('.zero').classList.remove('active');

    }
}

//buttons 
const fivePrtBtn = document.querySelector('.five');
const tenPrtBtn = document.querySelector('.ten');
const fifteenPrtBtn = document.querySelector('.fifteen');
const twentyFivePrtBtn = document.querySelector('.twenty-five');
const fiftyPrtBtn = document.querySelector('.fifty');

const resetBtn = document.querySelector('.reset-btn');


fivePrtBtn.addEventListener('click', calculateTipFive);
function calculateTipFive(){
    let tipAmount = (parseFloat(bill.value)*5)/100;
    let tipAmountPerson = tipAmount / parseInt(numberPerson.value);
    displayTipAmount.innerHTML = "$" + tipAmountPerson.toFixed(2);

    let totalAmount = parseFloat(bill.value)+ tipAmount;
    displayTotalAmount.innerHTML = "$" + (totalAmount / parseInt(numberPerson.value)).toFixed(2);

}
tenPrtBtn.addEventListener('click', calculateTipTen);
function calculateTipTen(){
    let tipAmount = (parseFloat(bill.value)*10)/100;
    let tipAmountPerson = tipAmount / parseInt(numberPerson.value);
    displayTipAmount.innerHTML = "$" + tipAmountPerson.toFixed(2);

    let totalAmount = parseFloat(bill.value)+ tipAmount;
    displayTotalAmount.innerHTML = "$" + (totalAmount / parseInt(numberPerson.value)).toFixed(2);

}
fifteenPrtBtn.addEventListener('click', calculateTipFifteen);
function calculateTipFifteen(){
    let tipAmount = (parseFloat(bill.value)*15)/100;
    let tipAmountPerson = (tipAmount / parseInt(numberPerson.value)).toFixed(2);
    displayTipAmount.innerHTML = "$" + tipAmountPerson;

    let totalAmount = parseFloat(bill.value)+ tipAmount;
    displayTotalAmount.innerHTML = "$" + (totalAmount / parseInt(numberPerson.value)).toFixed(2);

}
twentyFivePrtBtn.addEventListener('click', calculateTipTwentyFive);
function calculateTipTwentyFive(){
    let tipAmount = (parseFloat(bill.value)*25)/100;
    let tipAmountPerson = tipAmount / parseInt(numberPerson.value);
    displayTipAmount.innerHTML = "$" +tipAmountPerson.toFixed(2);

    let totalAmount = parseFloat(bill.value)+ tipAmount;
    displayTotalAmount.innerHTML = "$" + (totalAmount / parseInt(numberPerson.value)).toFixed(2);

}

fiftyPrtBtn.addEventListener('click', calculateTipFifty);
function calculateTipFifty(){
    let tipAmount = (parseFloat(bill.value)*50)/100;
    let tipAmountPerson = tipAmount / parseInt(numberPerson.value);
    displayTipAmount.innerHTML = "$" + tipAmountPerson.toFixed(2);

    let totalAmount = parseFloat(bill.value)+ tipAmount;
    displayTotalAmount.innerHTML = "$" + (totalAmount / parseInt(numberPerson.value)).toFixed(2);

}

resetBtn.addEventListener('click', reset);

function reset(){
    displayTipAmount.innerHTML = "$0.00"
    displayTotalAmount.innerHTML = "$0.00"


}
custom.addEventListener('click', calculateTipCustom);
custom.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13){
        calculateTipCustom();
    }
});
function calculateTipCustom(){
    let tipAmount = (parseFloat(bill.value)*parseFloat(custom.value))/100;
    let tipAmountPerson = tipAmount / parseInt(numberPerson.value);
    displayTipAmount.innerHTML = "$" + tipAmountPerson.toFixed(2);

    let totalAmount = parseFloat(bill.value)+ tipAmount;
    displayTotalAmount.innerHTML = "$" + (totalAmount / parseInt(numberPerson.value)).toFixed(2);

}