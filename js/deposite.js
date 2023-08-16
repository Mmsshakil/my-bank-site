// adding eventhandler to the deposite button

document.getElementById('button-deposite').addEventListener('click', function () {
    // console.log('helolo');
    // now take the value from deposite input 
    const depositeInput = document.getElementById('depositeInput');
    const depositeValue = depositeInput.value;
    // console.log(depositeValue);

    // now take the value of total deposite by using inner text
    const defaultDeposit = document.getElementById('defaultDeposit');
    const totalDeposite = defaultDeposit.innerText;

    // change the value of total deposite
    defaultDeposit.innerText = depositeValue;

})