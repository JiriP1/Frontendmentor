let form = document.querySelector(".sign-up-form"); //form
let inputs_wrapper = document.querySelectorAll(".input-wrapper"); //input wrapper
let inputs = document.querySelectorAll(".sign-up-form-input");//input
let exclamation_mark = document.querySelectorAll(".input-wrapper [alt='exclamation mark']");//exclamation mark
let error_message = document.querySelectorAll(".input-wrapper .error-message");//error message

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //for each input
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
    let email_input_wrapper = document.querySelector(".input-wrapper[email]");//input wrapper
    let email_input = document.querySelector(".input-wrapper[email] input");//input
    let email_error_message = document.querySelector(".input-wrapper[email] p");//error message
    let email_exclamation_mark = document.querySelector(".input-wrapper[email] img");//exclamation mark

    if(!email_input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_input_wrapper.style.borderColor = "var(--form-input-border-color-error)";
        email_exclamation_mark.style.display = "initial";
        email_error_message.style.display = "initial";
    }
})
