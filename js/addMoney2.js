// add money2


document.getElementById("btn-add-money").addEventListener('click', function (event) {
    event.preventDefault();

    // const addMoney = getInputFieldValueById();
    // console.log('money added amount', addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('pin-no');
    console.log('money added amount', addMoney, pinNumber);

})




