function navToggle() {
    let openNav = document.querySelector("#open-nav");
    let closeNav = document.querySelector("#close-nav");
    let nav = document.querySelector("nav");

    openNav.addEventListener('click', ()=> {
        nav.classList.toggle("nav-active");
    });
    closeNav.addEventListener('click', ()=> {
        nav.classList.toggle("nav-active");
    });
}

navToggle();