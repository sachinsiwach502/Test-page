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

const arrow = document.querySelector(".accordin-arrow").style.transform = "rotate(180deg)"
const text = document.querySelector(".hidden_txt").style.display = "flex"

const accordians = document.querySelectorAll(".full_accrodian_part");

accordians.forEach(accordItem => {
    const arrow = accordItem.querySelector(".accordin-arrow");
    const text = accordItem.querySelector(".hidden_txt");

    accordItem.addEventListener("click", () => {
        accordians.forEach(otheraccorItem => {
            const otherArrow = otheraccorItem.querySelector(".accordin-arrow");
            const otherText = otheraccorItem.querySelector(".hidden_txt");

            if (otheraccorItem !== accordItem) {
                otherArrow.style.transform = "rotate(0deg)";
                otherText.style.display = "none";
                otheraccorItem.classList.remove("border_3")
            }
        });

        if (text) {
            let textdisplay = window.getComputedStyle(text).display;
            if (textdisplay === "none") {
                arrow.style.transform = "rotate(180deg)";
                text.style.display = "flex";
                accordItem.classList.add("border_3")
            } else {
                arrow.style.transform = "rotate(0deg)";
                text.style.display = "none";
                accordItem.classList.remove("border_3");
            }
        }
    });
});

// menubar ----------------

let body = document.body;
let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuBar");
let line_1 = document.querySelector(".first-line")
let line_2 = document.querySelector(".sec-line");
let line_3 = document.querySelector(".third-line");

function cross() {
    line_2.classList.add("d-none");
    line_1.classList.add("position-relative");
    line_1.style.top = "12px";
    line_1.style.left = "2px";
    line_1.style.transform = "rotate(45deg)"
    line_3.classList.add("position-relative");
    line_3.style.top = "-12px";
    line_3.style.transform = "rotate(-45deg)";
    line_1.classList.add("transition")
    line_3.classList.add("transition")
}
function line() {
    line_2.classList.remove("d-none");
    line_1.classList.remove("position-relative");
    line_1.style.transform = "rotate(0deg)"
    line_3.classList.remove("position-relative");
    line_3.style.transform = "rotate(0deg)"
}


// add show class in nav links--------------
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        cross();
        body.style.overflow = "hidden";
    } else {
        line();
        body.style.overflow = "auto";
    }
})


// countdown----------------------------------

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 19);
targetDate.setHours(targetDate.getHours() + 10);
targetDate.setMinutes(targetDate.getMinutes() + 2);
targetDate.setSeconds(targetDate.getSeconds() + 55);

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${days}d:${hours}hr:${minutes}min:${seconds}sec`;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        countdownElement.textContent = "Countdown is over!";
    }
}

const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();

// preloader---------------------
let preloader = document.querySelector(".preloader");
preloader.classList.add("d-flex");
setTimeout(() => {
    preloader.classList.add("d-none");
}, 3000);


// aos--------------------
AOS.init({
    durattion: 1200,
});