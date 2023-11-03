let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phn");
let first_name_err = document.getElementById("first_name_err")
let last_name_err = document.getElementById("last_name_err")
let email_err = document.getElementById("email_err")
let phn_err = document.getElementById("phn_err")
let submit =document.getElementsByClassName 

firstname.onchange = function (e) {
    let inputString = e.target.value;
    let errMsg = ""

    if (inputString === "") {
        errMsg = "Empty string is not allowed!"
        last_name_err.innerText = errMsg
        last_name_err.style.display = 'inline'
    }
    else if (inputString.charAt(0) === ' ') {
        errMsg = "Space not allowed on first charactor!"
        first_name_err.innerText = errMsg
        first_name_err.style.display = 'inline'
    }
    else if (inputString.includes('0') || inputString.includes('1') || inputString.includes('2') || inputString.includes('3') || inputString.includes('4') || inputString.includes('5') || inputString.includes('6') || inputString.includes('7') || inputString.includes('8') || inputString.includes('9')) {
        errMsg = "Number are not allowed!"
        first_name_err.innerText = errMsg
        first_name_err.style.display = 'inline'
    }
    else if (inputString.includes('/') || inputString.includes(`\/`) || inputString.includes('$') || inputString.includes('&') || inputString.includes('!') || inputString.includes('?') || inputString.includes(',') || inputString.includes(' ') || inputString.includes('*') || inputString.includes('_') || inputString.includes('@')) {
        errMsg = "Special characters are not allowed!"
        first_name_err.innerText = errMsg
        first_name_err.style.display = 'inline'
    }
    // else if(inputString === ""){
    //     errMsg = "Empty string is not allowed!"
    //     first_name_err.innerText = errMsg
    //     first_name_err.style.display = 'inline'
    // }
    else {
        first_name_err.style.display = 'none'
    }
}
// firstname.addEventListener('change' , )
lastname.onchange = function (e) {
    let inputString = e.target.value;
    let errMsg = ""

    if (inputString === "") {
        errMsg = "Empty string is not allowed!"
        last_name_err.innerText = errMsg
        last_name_err.style.display = 'inline'
    }
    else if (inputString.charAt(0) === ' ') {
        errMsg = "Space not allowed on first charactor!"
        last_name_err.innerText = errMsg
        last_name_err.style.display = 'inline'
    }
    else if (inputString.includes('0') || inputString.includes('1') || inputString.includes('2') || inputString.includes('3') || inputString.includes('4') || inputString.includes('5') || inputString.includes('6') || inputString.includes('7') || inputString.includes('8') || inputString.includes('9')) {
        errMsg = "Number are not allowed!"
        last_name_err.innerText = errMsg
        last_name_err.style.display = 'inline'
    }
    else if (inputString.includes('/') || inputString.includes(`\/`) || inputString.includes('$') || inputString.includes('&') || inputString.includes('!') || inputString.includes('?') || inputString.includes(',') || inputString.includes(' ') || inputString.includes('*') || inputString.includes('_')) {
        errMsg = "Special characters are not allowed!"
        last_name_err.innerText = errMsg
        last_name_err.style.display = 'inline'
    }
    // else if(inputString === ""){
    //     errMsg = "Empty string is not allowed!"
    //     last_name_err.innerText = errMsg
    //     last_name_err.style.display = 'inline'
    // }
    else {
        last_name_err.style.display = 'none'
    }
}

email.onchange = function (e) {
    let inputString = e.target.value;
    let errMsg = ""

    if (inputString.charAt(0) === ' ') {
        errMsg = "Space not allowed on first charactor!"
        email_err.innerText = errMsg
        email_err.style.display = 'inline'
    }
    else if (!inputString.includes("@") && !inputString.includes(".")) {
        errMsg = "email is not valid!"
        email_err.innerText = errMsg
        email_err.style.display = 'inline'
    }
    else if (inputString === "") {
        errMsg = "Empty string is not allowed!"
        email_err.innerText = errMsg
        email_err.style.display = 'inline'
    }
    else {
        email_err.style.display = 'none'
    }
}

phone.onchange = function (e) {
    let inputString = e.target.value;
    let errMsg = ""

    if (inputString.length > 10) {
        errMsg = "Mobile number should not be more than 10 digits!"
        phn_err.innerText = errMsg
        phn_err.style.display = 'inline'
    }
    else if (inputString.length < 10) {
        errMsg = "Mobile number should not be less than 10 digits!"
        phn_err.innerText = errMsg
        phn_err.style.display = 'inline'
    }
    else if (inputString === "") {
        errMsg = " mobile should not be empty!"
        phn_err.innerText = errMsg
        phn_err.style.display = 'inline'
    }
    else if (inputString.includes('/') || inputString.includes(`\/`) || inputString.includes('$') || inputString.includes('&') || inputString.includes('!') || inputString.includes('?') || inputString.includes(',') || inputString.includes(' ') || inputString.includes('*') || inputString.includes('_')) {
        errMsg = "there should be no special characters!"
        phn_err.innerText = errMsg
        phn_err.style.display = 'inline'
    }
    else {
        email_err.style.display = 'none'
    }
}