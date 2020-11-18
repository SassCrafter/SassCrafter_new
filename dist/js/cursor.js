
const root = document.querySelector('html');

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Hoverable elements

const hover = document.querySelectorAll(".hover");
hover.forEach(el  => {
    el.addEventListener("mouseover", function() {
        cursor.style.width = "80px";
        cursor.style.height = "80px";
        cursor.style.background = "transparent";
        cursor.style.border = "1px solid #ffd800";
    });
    el.addEventListener("mouseout", function() {
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.background = "#ffd800";
        cursor.style.border = "none";
    });
})
/*
const bgWhite = document.querySelectorAll(".bg-white");
bgWhite.forEach(el => {
    el.addEventListener("mouseover", function() {
        cursor.style.background = "black";
    });
    el.addEventListener("mouseout", function() {
        cursor.style.background = "white";
    });
});
*/


root.addEventListener('mousemove', e => {
    //setPosition(follower, e, -17);
    let offset = Math.floor(cursor.offsetHeight / 2) ;
    setPosition(cursor, e, offset);
    //console.log(e);
    
    
});

function setPosition(element, e, offset) {
    element.style.transform = `translate3d(${e.clientX - offset}px,${e.clientY - offset}px, 0)`;
}


