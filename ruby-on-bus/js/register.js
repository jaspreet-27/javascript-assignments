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

    
    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmpassword = confirmPasswordInput.value.trim();
    const ph = phInput.value.trim();
    const gender1 = genderInput1.value.trim();
    const gender2 = genderInput2.value.trim();
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".input-box .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (firstname === "") {
        showError(firstnameInput, "Enter your first name");
    }
    

    }
    if (lastname === "") {
        showError(lastnameInput, "Enter your last name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }


    if (password === "") {
        showError(passwordInput, "Enter your password");
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

     
    
    
    if (gender1 === "" && gender2 === "" ) {
        showError(genderInput1, "Select your gender");
    }

    const errorInputs = document.querySelectorAll(".input-box .error");
    if (errorInputs.length > 0) return;
   let user = { "fname":firstnameInput  ,"lname":lastnameInput, "email":emailInput , "password" : passwordInput, "phone":phInput}
   localStorage.setItem(user.email, JSON.stringify(user));
    form.submit();

// Handling form submission event
form.addEventListener("submit", handleFormData);