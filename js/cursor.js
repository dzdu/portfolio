let mouseCursor = document.querySelector(".cursor");
let pageLink = document.querySelectorAll(".c-links");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

pageLink.forEach((link) => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('.hovered-link')
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('.hovered-link')
    });

});