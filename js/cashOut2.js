// cashOut2

document.getElementById("btn-cash-out").addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    console.log('cashOutMoney', cashOutMoney, 'pinNumber', pinNumber);



    if (pinNumber === 111) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOutMoney;

        document.getElementById("account-balance").innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-100');
        div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${cashOutMoney} withdraw. New Balance ${newBalance}</p>
            `

        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Failed to cash out your money! Please try again.');
    }
})
