function navToggle() {
    let openNav = document.querySelector("#open-nav");
    let closeNav = document.querySelector("#close-nav");
    let nav = document.querySelector("nav");
    let root = document.querySelector(":root");

    openNav.addEventListener('click', ()=> {
        nav.classList.toggle("nav-active");
        root.classList.toggle("overflow-inactive");
    });
    closeNav.addEventListener('click', ()=> {
        nav.classList.toggle("nav-active");
        root.classList.toggle("overflow-inactive");
    });
}

function highlightNav() {
    let home = document.querySelectorAll(".list-container ul li")[0];
    let collection = document.querySelectorAll(".list-container ul li")[1];
    let about = document.querySelectorAll(".list-container ul li")[2];
    let contact = document.querySelectorAll(".list-container ul li")[3];
    let path = window.location.pathname;
    switch(path){
        case '/':
        case './':
        case '/index.html':
            // home.classList.add(".nav-btn-active");
            home.style.fontWeight = "700";
            break;

        case '/collection':
        case './collection':
             collection.style.fontWeight = "700";
            break;
        case '/about':
        case './about':
             about.style.fontWeight = "700";
            break;
        case '/contact':
        case './contact':
             contact.style.fontWeight = "700";
            break;
        default:
            null
    }
}

navToggle();
highlightNav();