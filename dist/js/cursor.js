
const root = document.querySelector('html');

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Folowing extra circle
const follower = document.createElement("div");
follower.classList.add("cursor", "cursor-follower");
root.appendChild(follower);

/*
// Hoverable elements
const hover = document.querySelectorAll(".hover");
hover.forEach(el  => {
    el.addEventListener("mouseenter", function() {
        follower.style.width = "80px";
        follower.style.height = "80px";
    });
    el.addEventListener("mouseover", function() {
        follower.style.width = "40px";
        follower.style.height = "40px";
    });
})

*/

root.addEventListener('mousemove', e => {
    setPosition(follower, e, -17);
    setPosition(cursor, e, 0);
});

function setPosition(element, e, offset) {
    element.style.transform = `translate3d(${e.clientX + offset}px,${e.clientY + offset}px, 0)`;
}
