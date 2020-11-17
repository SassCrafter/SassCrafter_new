window.onload = function() {
    let loader = document.querySelector(".preloader");
    setTimeout(function() {
        loader.parentNode.removeChild(loader);
    }, 100);
}


// Fullpage
let myFullPage = new fullpage('#fullpage', {
    autoScrolling: true,
    scrollingSpeed: 1400,
    controlArrows: true,
    loopTop: true,
    loopBottom: true,
    parallax: true,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
});

// Controlls
const arrow_top = document.getElementById("arrow-top");
const arrow_bot = document.getElementById("arrow-down");

arrow_top.addEventListener("click", function() {
    arrow_top.classList.add("hi");
    fullpage_api.moveSectionUp();
});
arrow_bot.addEventListener("click", function() {
    fullpage_api.moveSectionDown();
});




const cards = document.querySelectorAll(".projects-card");
cards.forEach(el => {
    el.addEventListener("click", function() {
        cards.forEach(el => {
            el.classList.remove("projects-card-clicked");
        });
        el.classList.toggle("projects-card-clicked");
    });
});
