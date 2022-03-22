const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const useremail = loginForm.useremail.value;
    const password = loginForm.password.value;

    if (useremail === "user@ejemplo.com" && password === "password") {
        alert("You have successfully logged in.");
        window.location.href="http://www.google.com";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})