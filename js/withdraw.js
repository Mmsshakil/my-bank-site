// first set eventListener on withdraw button
document.getElementById('button-withdraw').addEventListener('click', function(){
    
    // now take the value from input
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawInputValue = withdrawInput.value;

    // console.log(withdrawInputValue);


    // now take the value from total value
    const defaultDepositWithdraw = document.getElementById('defaultDepositWithdraw');
    const defaultDepositWithdrawValue = defaultDepositWithdraw.innerText;

    // console.log(defaultDepositWithdrawValue);

    // here update the total withdraw value 
    // total withdraw = input value + default withdraw value;
    
    defaultDepositWithdraw.innerText = parseFloat(withdrawInputValue) + parseFloat(defaultDepositWithdrawValue);

    // now call the total money part
    const totalBalanceDefault = document.getElementById('totalBalanceDefault');
    const totalBalanceDefaultValue = totalBalanceDefault.innerText;

    if(parseFloat(totalBalanceDefaultValue) < parseFloat(withdrawInputValue)){
        alert("You don't have enough moneyto withdraw");
        return;
    }
    //now we need to update the total value
    totalBalanceDefault.innerText = parseFloat(totalBalanceDefaultValue) - parseFloat(withdrawInputValue);
    // console.log(totalBalanceDefault);

    // make input part clear after the withdraw value addition
    withdrawInput.value = '';
    
})