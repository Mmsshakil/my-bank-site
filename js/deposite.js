// adding eventhandler to the deposite button

document.getElementById('button-deposite').addEventListener('click', function () {
    // console.log('helolo');
    // now take the value from deposite input 
    const depositeInput = document.getElementById('depositeInput');
    const newDepositeValue = depositeInput.value;

    if (isNaN(parseFloat(newDepositeValue))) {
        alert("Please Enter Number");
        return;
    }

    // now take the value of total deposite by using inner text
    const defaultDeposit = document.getElementById('defaultDeposit');
    const previousTotalDeposite = defaultDeposit.innerText;

    // make string to int and adding the previous value and the input value
    const totalNewDeposite = parseInt(newDepositeValue) + parseInt(previousTotalDeposite);

    // change the value of total deposite
    defaultDeposit.innerText = totalNewDeposite;

    // call the total money 
    const totalBalanceDefault = document.getElementById('totalBalanceDefault');
    // set the default value as innertext
    const totalBalanceDefaultValue = totalBalanceDefault.innerText;
    // console.log(parseFloat(totalBalanceDefaultValue) );

    // update the total value 
    // input value + default value
    const totally = parseFloat(newDepositeValue) + parseFloat(totalBalanceDefaultValue);
    totalBalanceDefault.innerText = totally;
    // console.log(totally);


    // clear the deposite input 
    depositeInput.value = '';

})