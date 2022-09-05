// toggle menu
let toggleBtn = document.querySelector(".toggle-menu"),
    bars = "fa-bars",
    cansel = "fa-times",
    toggleMenu = document.querySelector(".nav__container-links");
toggleBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains(bars)) {
        e.target.classList.remove(bars);
        e.target.classList.add(cansel);
    } else {
        e.target.classList.add(bars);
        e.target.classList.remove(cansel);
    }
    toggleMenu.classList.toggle("active");
    document.body.classList.toggle("active");
});
