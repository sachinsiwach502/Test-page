let to_arrow = document.querySelector(".to_top");
let pt = 200;

window.addEventListener("scroll", () => {
    if (scrollY > pt) {
        to_arrow.style.display = "block"
    } else {
        to_arrow.style.display = "none"
    }
});

to_arrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



