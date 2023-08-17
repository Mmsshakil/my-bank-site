// first set eventListener on withdraw button
document.getElementById('button-withdraw').addEventListener('click', function () {

    // now take the value from input
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawInputValue = withdrawInput.value;

    if (isNaN(parseFloat(withdrawInputValue))) {
        alert("Please Enter Number");
        return;
    }




    // now take the value from total value
    const defaultDepositWithdraw = document.getElementById('defaultDepositWithdraw');
    const defaultDepositWithdrawValue = defaultDepositWithdraw.innerText;



    // here update the total withdraw value 
    // total withdraw = input value + default withdraw value;

    // we replace this line to 33 
    // defaultDepositWithdraw.innerText = parseFloat(withdrawInputValue) + parseFloat(defaultDepositWithdrawValue);

    // now call the total money part
    const totalBalanceDefault = document.getElementById('totalBalanceDefault');
    const totalBalanceDefaultValue = totalBalanceDefault.innerText;

    if (parseFloat(totalBalanceDefaultValue) < parseFloat(withdrawInputValue)) {
        alert("You don't have enough moneyto withdraw");
        return;
    }

    // we replace this line from 20 line because we need to check first the withdraw amount is less than the total balance
    defaultDepositWithdraw.innerText = parseFloat(withdrawInputValue) + parseFloat(defaultDepositWithdrawValue);

    //now we need to update the total value
    totalBalanceDefault.innerText = parseFloat(totalBalanceDefaultValue) - parseFloat(withdrawInputValue);
    // console.log(totalBalanceDefault);

    // make input part clear after the withdraw value addition
    withdrawInput.value = '';

})