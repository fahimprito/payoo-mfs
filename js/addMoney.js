// add money


document.getElementById("btn-add-money").addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const pinNumber = document.getElementById("pin-no").value;
    // console.log(addMoneyInput, pinNumber);


    if (pinNumber === "111") {
        console.log("added");

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;
        // set value 
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money! Please try again.');
    }
})




