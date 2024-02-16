let form = document.querySelector(".sign-up-form");
let inputs_wrapper = document.querySelectorAll(".input-wrapper");
let inputs = document.querySelectorAll(".sign-up-form-input");
let exclamation_mark = document.querySelectorAll(".input-wrapper [alt='exclamation mark']");
let error_message = document.querySelectorAll(".input-wrapper .error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    for(let i=0; i < inputs_wrapper.length; i++){

        inputs_wrapper[i].style.borderColor = "var(--form-input-border-color)";
        exclamation_mark[i].style.display = "none";
        error_message[i].style.display = "none";

        if(inputs[i].value === "") {
            inputs_wrapper[i].style.borderColor = "var(--form-input-border-color-error)";
            exclamation_mark[i].style.display = "initial";
            error_message[i].style.display = "initial";
        }
    }

    // email Validation 
    let email_input_wrapper = document.querySelector(".input-wrapper[email]");
    let email_input = document.querySelector(".input-wrapper[email] input");
    let email_error_message = document.querySelector(".input-wrapper[email] p");
    let email_exclamation_mark = document.querySelector(".input-wrapper[email] img");

    if(!email_input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_input_wrapper.style.borderColor = "var(--form-input-border-color-error)";
        email_exclamation_mark.style.display = "initial";
        email_error_message.style.display = "initial";
    }
})
