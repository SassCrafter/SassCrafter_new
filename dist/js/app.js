window.onload = function() {
    let loader = document.querySelector(".preloader");
    setTimeout(function() {
        loader.parentNode.removeChild(loader);
    }, 3500);
}