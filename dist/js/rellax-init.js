const cd_inner = document.querySelectorAll(".cd-section-inner");
cd_inner.forEach(el => {
    el.classList.add("rellax");
    el.setAttribute("data-rellax-percentage", "1");
    el.setAttribute("data-rellax-zindex", "999");
});




let rellax = new Rellax(".rellax", {
    speed: -8,
    center: true,
});



