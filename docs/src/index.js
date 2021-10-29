function navToggle() {
    let openNav = document.querySelector("#open-nav");
    let closeNav = document.querySelector("#close-nav");
    let nav = document.querySelector("nav");
    let root = document.querySelector(":root");

    openNav.addEventListener('click', () => {
        root.classList.toggle("overflow-inactive");
        nav.style.display = "block";
        // nav.style.transform = "translateX(100vw)";
        setTimeout(() => {
            nav.classList.add("nav-active");
        }, 10);
    });
    closeNav.addEventListener('click', () => {
        root.classList.toggle("overflow-inactive");
        nav.classList.remove("nav-active");
        setTimeout(() => {
            nav.style.display = "none";
        }, 400);
    });
}

function navDesktopShow(x) {
    let root = document.querySelector(":root");
    let nav = document.querySelector('nav');

    if (x.matches) {
        root.classList.remove("overflow-inactive");
        nav.style.display = "block";
        nav.classList.add("nav-active");
    } else {
        nav.classList.remove("nav-active");
        nav.style.display = "none";
        navToggle();
    }
}

let x = window.matchMedia("(min-width: 992px)");
navDesktopShow(x);
x.addListener(navDesktopShow);

// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 992) {
//         root.classList.remove("overflow-inactive");
//         nav.style.display = "block";
//         nav.classList.add("nav-active");
//     } else {
//         navToggle();
//     }
// });

function highlightNavText() {
    let home = document.querySelectorAll(".list-container ul li")[0];
    let collection = document.querySelectorAll(".list-container ul li")[1];
    let about = document.querySelectorAll(".list-container ul li")[2];
    let contact = document.querySelectorAll(".list-container ul li")[3];
    let path = window.location.pathname;
    console.log(path);

    function decorDesktop(x, link) {
        if (x.matches) {
            console.log(link);
            link.style.textDecoration = "underline";
            link.style.textUnderlineOffset = ".8rem";
            link.style.textDecorationThickness = ".2rem";
            // link.style.borderBottom = "3px solid #FFF";
            // link.style.paddingBottom = "1rem";
        } else {
            link.style.textDecoration = "none";
        }
    }
    const x = window.matchMedia("(min-width: 992px)");

    switch (path) {
        case '':
        case '/':
        case './':
        case '/home':
        case '/index.html':
            // home.classList.add(".nav-btn-active");
            home.style.fontWeight = "700";
            decorDesktop(x, home);
            break;

        case '/collection':
        case './collection':
            collection.style.fontWeight = "700";
            decorDesktop(x, collection);
            break;
        case '/about':
        case './about':
            about.style.fontWeight = "700";
            decorDesktop(x, about);
            break;
        case '/contact':
        case './contact':
            contact.style.fontWeight = "700";
            decorDesktop(x, contact);
            break;
        default:
            null
    }
    x.addListener(decorDesktop);
}
highlightNavText();