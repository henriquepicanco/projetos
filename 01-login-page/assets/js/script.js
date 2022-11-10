let username = document.querySelector(`input#username`);
let password = document.querySelector(`input#password`);

username.addEventListener("input", usernameHasValue);
password.addEventListener("input", passwordHasValue);

function usernameHasValue() {
    if (username.value.length > 0) {
        username.classList.add(`has-value`);
    } else {
        username.classList.remove(`has-value`);
    }
}

function passwordHasValue() {
    if (password.value.length > 0) {
        password.classList.add(`has-value`);
    } else {
        password.classList.remove(`has-value`);
    }
}
