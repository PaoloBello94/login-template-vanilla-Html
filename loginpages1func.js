const loginForm = document.getElementById("login__form");
const loginButton = document.getElementById("form__btn");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const useremail = loginForm.useremail.value;
    const password = loginForm.userpassword.value;

    if (useremail === "user@ejemplo.com" && password === "password") {
        alert("Bienvenido " + useremail + ".");
        window.location.href="http://www.google.com";
    } else {
        alert(" Coreo y/o Contraseña incorrectas");
    }
})