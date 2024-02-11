const rating_Buttons = document.querySelectorAll(".rating-button"); /* rating buttons 1, 2, ... */
const submit_button = document.querySelector(".submit-button"); /* submit button */
const summary = document.querySelector(".user-rating"); /* user rating  in thank you section */
const rating_section = document.querySelector(".rating-section"); /* rating section */
const thank_you_section = document.querySelector(".thank-you-section"); /* thank you section */

let user_rating = 0;

for(let i=0; i < rating_Buttons.length; i++) {

    rating_Buttons[i].addEventListener("click", function(e){
        user_rating = i + 1;
        summary.textContent = user_rating;

        /* change background of the buttons to default */
        rating_Buttons.forEach(function(button){
            button.classList.remove("selected")
        })

        /* change background of the clicked button */
        rating_Buttons[i].classList.toggle("selected") 


        /*when you click on any number, a submit button will appear */
        /* the user cannot proceed without a review. */
        submit_button.style.visibility = "visible"
        submit_button.style.opacity = "1" /* for fade in animation */
    })
}

submit_button.addEventListener("click", function(e){

    /* switching sections */
    rating_section.classList.toggle("hide");
    thank_you_section.classList.toggle("hide");
})



