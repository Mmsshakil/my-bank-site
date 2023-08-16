// set eventlistner to the button 
// because we will check the mail and pass when the button will click

document.getElementById('button-submit').addEventListener('click', function () {

    // now we need to call the input mail part
    const inputMail = document.getElementById('inputMail');
    // here we take the input value in this mails variable
    const mails = inputMail.value;


    // now we will call the password section
    const inputPass = document.getElementById('inputPass');
    // here we take the value of pass
    const passes = inputPass.value;

    // now need to check the mail and pass
    // we will not check mail and pass this type in future

    if (mails === 'shakil@govt.com' && passes === 'shakil') {

        // if the mail and pass is true then go to the bank page
        window.location.href = 'bank.html';

    }
    else {
        alert('Please enter correct mail and pass');
    }

})