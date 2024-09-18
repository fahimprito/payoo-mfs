// console.log("button click");

// document.getElementById("btn-login").addEventListener('click', function(){
//     console.log("button clicked");
// })

document.getElementById("btn-login").addEventListener('click', function(event){
    event.preventDefault();
    console.log("button clicked");


    const phoneNumber = document.getElementById("phone-no").value;
    console.log(phoneNumber);

    const pinNumber = document.getElementById("pin-no").value;
    console.log(pinNumber);
})