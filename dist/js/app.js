window.onload = function () {
    let loader = document.querySelector(".preloader");
    setTimeout(function () {
        loader.parentNode.removeChild(loader);
    }, 3000);
}


// Fullpage
let myFullPage = new fullpage('#fullpage', {
    anchors: ['hero', 'portfolio', 'about-home', 'blog', 'contact'],
    menu: '#section-nav',
    recordHistory: false,
    autoScrolling: true,
    scrollingSpeed: 1400,
    controlArrows: true,
    loopTop: true,
    loopBottom: true,
    //parallax: true,
    //parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
});





const cards = document.querySelectorAll(".projects-card");
cards.forEach(el => {
    el.addEventListener("click", function () {
        cards.forEach(el => {
            el.classList.remove("projects-card-clicked");
        });
        el.classList.toggle("projects-card-clicked");
    });
});
