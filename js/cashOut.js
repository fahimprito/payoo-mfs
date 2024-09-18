// cashOut

document.getElementById("btn-cash-out").addEventListener('click', function (event) {
    // console.log('cashOut.js');
    event.preventDefault();

    const cashOutBalance = document.getElementById("input-cash-out").value;
    const cashOutBalanceNumber = parseFloat(cashOutBalance);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    console.log(cashOutBalance, pinNumber);

    if (pinNumber === '111') {
        // console.log("heloo");

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutBalanceNumber;
        // console.log(newBalance);

        // slow balance 
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to cash out your money! Please try again.');
    }
})
