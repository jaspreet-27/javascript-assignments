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

    const email = emailInput.value;
    const password = passwordInput.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // const numRegex = [A-Za-z\d@$!%*?&]{8,}$/;

    document.querySelectorAll(".field .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (email.charAt(0) === ' ') {
        showError(emailInput, "space is not allowed")
    }

    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (passwordRegex.test(password)) {
        showError(passwordInput, "Invalid password");
    }


    const errorInputs = document.querySelectorAll(".field .error");
    if (errorInputs.length > 0) return;

    let user = localStorage.getItem(email)

    if (user) {
        user = JSON.parse(user);
        if (user.password === password) {
            form.submit();
        }
        else {
            // alert passwroon not match
            alert("password invalid")
        }
    }
    else {
        // user invalid
        alert("user not exist!!!!")
    }


}

form.addEventListener("submit", handleFormData);






