

document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('pin-no');
    console.log('amount', addMoney, 'pinNumber', pinNumber);
    

    if (pinNumber === 111) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById("account-balance").innerText = newBalance;

    }
    else {
        alert('Failed to add money! Please try again.');
    }
})