const show_button = document.querySelectorAll(".show_button");
const hide_button = document.querySelectorAll(".hide_button");
const answer = document.querySelectorAll(".answer");
const show_hide_header = document.querySelectorAll(".show_hide_button");

/***** + button *****/
for(let i=0; i < show_button.length; i++) {
    /* at each button add event listener*/

    show_button[i].addEventListener("click", function(e) {
        hide_or_show(i);
    })
}

/***** - button *****/
for(let i=0; i < hide_button.length; i++) {
    /* at each button add event listener*/

    hide_button[i].addEventListener("click", function(e) {
        hide_or_show(i);
    })
}


/***** for question header *****/
for(let i=0; i < show_hide_header.length; i++) {
    /* at each header add event listener*/

    show_hide_header[i].addEventListener("click", function(e) {
        hide_or_show(i);
    })
}




function hide_or_show(index) {
    show_button[index].classList.toggle("hide");
    hide_button[index].classList.toggle("hide");
    answer[index].classList.toggle("hide");
}