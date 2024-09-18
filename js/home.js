

// add money
document.getElementById("btn-add-money").addEventListener('click', function (event) {
    event.preventDefault();
    // console.log("add-money clicked");

    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("pin-no").value;
    // console.log(addMoneyInput, pinNumber);

    if (pinNumber === "111") {
        console.log("added");
        
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // set value 
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money! Please try again.');
    }
})




