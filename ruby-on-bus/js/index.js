// LOGIN PAGE JS


const form = document.querySelector("form");
const passwordInput = document.getElementById("password_input");

const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".field").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();
 
    const emailInput = document.getElementById("email_input");
  
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".field .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
  
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
   
    const errorInputs = document.querySelectorAll(".field .error");
    if (errorInputs.length > 0) return;
    
    form.submit();
}

form.addEventListener("submit", handleFormData);



