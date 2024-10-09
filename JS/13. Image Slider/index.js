const slides = document.querySelectorAll(".slides img"); //node list
/* selects all  elements in class slides that are img elements*/

let slideIndex = 0;

document.addEventListener("DOMContentLoaded",initializeSlider);
// wait for DOMcontent to load then call initialize fn


function initializeSlider() { 
    /* populate webpage with first image */
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); //class list to add classes to elements
    }
}
function showSlide(index) { /* index of next slide to go to */

    if(index>=slides.length) {
        slideIndex = 0;
    }
    else if(index<=0) {
        slideIndex = slides.length - 1 ;
    }

    slides.forEach(slide => { //for each element aka slide in slides node list do this 
        slide.classList.remove("displaySlide"); // so it longer displays any image
    });


    slides[slideIndex].classList.add("displaySlide"); // add class display slide to next slide
}
function prevSlide() { /* fn for prev slide */

    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() { /* fn for next slide */
    slideIndex++;
    showSlide(slideIndex);
}