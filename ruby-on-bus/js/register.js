// REGISTER PAGE


const form = document.querySelector("form");
const passwordInput = document.getElementById("password_registor_input");

const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".input-box").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();

    const firstnameInput = document.getElementById("firstname_input");
    const lastnameInput = document.getElementById("lastname_input");
    const emailInput = document.getElementById("email_registor_input");
    const genderInput1 = document.getElementById("dot-1");
    const genderInput2 = document.getElementById("dot-2");
    const confirmPasswordInput = document.getElementById("confirm_password_registor_input");
    const phInput = document.getElementById("ph_input");


    const firstname = firstnameInput.value
    const lastname = lastnameInput.value
    const email = emailInput.value
    const password = passwordInput.value.trim();
    const confirmpassword = confirmPasswordInput.value.trim();
    const ph = phInput.value.trim();
    const gender1 = genderInput1.value.trim();
    const gender2 = genderInput2.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const rule = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^\d{10}$/;

    document.querySelectorAll(".input-box .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (firstname === "") {
        showError(firstnameInput, "Enter your first name");
    }
    if (!nameRegex.test(firstname)) {
        showError(firstnameInput, " Invalid name");
    }
    if (firstname.charAt(0) === ' ') {
        showError(firstnameInput, "space is not allowed")
    }

    if (lastname === "") {
        showError(lastnameInput, "Enter your last name");
    }
    if (!nameRegex.test(lastname)) {
        showError(lastnameInput, " Invalid name");
    }
    if (lastname.charAt(0) === ' ') {
        showError(lastnameInput, "space is not allowed")
    }

    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (email.charAt(0) === ' ') {
        showError(emailInput, "space is not allowed")
    }
    // if(!rule.test(email)){
    //     showError(emailInput,'spacial character not allowed');
    // }


    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (passwordRegex.test(password)) {
        showError(passwordInput, "Invalid password");
    }
    if (confirmpassword === "") {
        showError(confirmPasswordInput, "Enter confirm password");
    }
    if (confirmpassword !== password) {
        showError(confirmPasswordInput, "password not match");
    }

    if (ph === "") {
        showError(phInput, "Enter phone number password");
    }
    if (!phoneRegex.test(ph)) {
        showError(phInput, "Invalid phone number");
    }
    if (ph.charAt(0) === ' ') {
        showError(phInput, "space is not allowed")
    }


    if (gender1 === "" && gender2 === "") {
        showError(genderInput1, "Select your gender");
    }

    const errorInputs = document.querySelectorAll(".input-box .error");
    if (errorInputs.length > 0) return;

    let user = { "firstname": firstname, "lastname": lastname, "email": email, "password": password, "phone": ph }
    let Exist_user = localStorage.getItem(user.email);
    if (Exist_user) {
        alert("user alreday exist")
    } else {
        localStorage.setItem(user.email, JSON.stringify(user));
        form.submit();
    }
}

// Handling form submission event
form.addEventListener("submit", handleFormData);


// let user = localstorage.getitem(email)

if (user) {
    user = json.parse(user);

}
if (user.password === password) {
    form.submit();
}