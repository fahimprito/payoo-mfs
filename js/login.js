// console.log("button click");

// document.getElementById("btn-login").addEventListener('click', function(){
//     console.log("button clicked");
// })

// document.getElementById("btn-login").addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("button clicked");

//     const phoneNumber = document.getElementById("phone-no").value;
//     const pinNumber = document.getElementById("pin-no").value;

//     console.log(phoneNumber, pinNumber);

//     if(phoneNumber==="555" && pinNumber==="111"){
//         console.log("login successful!");
//     }
//     else{
//         console.log("wrong phone number or pin number!");

//     }
// })


document.getElementById("btn-login").addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-no").value;
    const pinNumber = document.getElementById("pin-no").value;

    console.log(phoneNumber, pinNumber);

    if (phoneNumber === "555" && pinNumber === "111") {
        console.log("login successful!");
        window.location.href = "../home.html";
    }
    else {
        alert("wrong phone number or pin number!")
    }
})