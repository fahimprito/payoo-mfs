

document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('pin-no');
    // console.log('amount', addMoney, 'pinNumber', pinNumber);

    if (isNaN(addMoney)) {
        alert('Enter a valid amount!');
        return;
    }

    if (pinNumber === 111) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById("account-balance").innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.classList.add('bg-green-100');
        p.innerText = `ADDED: $${addMoney}, New Balance: $${newBalance}`;
        // console.log(p);

        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Failed to add money! Please try again.');
    }
})