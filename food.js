const mobile = document.querySelector('.menu-toggle');

const mobileLink = document.querySelector('.header');

mobile.addEventListener("click", function(){

mobile.classList.toggle("is-active");

mobileLink.classList.toggle("active");

});

// close menu when click

mobileLink.addEventListener("click", function(){

const menuBars = document.querySelector(".is-active");

if(window.innerWidth<=800 && menuBars) {

mobile.classList.toggle("is-active");

mobileLink.classList.toggle("active");

}

})

// var step= 100;

// var stepFilter = 60;

// var scrolling = true;

// $(".back").bind("click", function(e){

// e.preventDefault();

// $(".spl-item").animate({

// scrollLeft: "-=" + step + "px"

// });

// });

// $(".next").bind("click", function(e){

// e.preventDefault();

// $(".spl-item").animate({

// scrollLeft: "+=" + step + "px"

// });
// }
// );