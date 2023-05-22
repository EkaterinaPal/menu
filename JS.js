const menuSections = document.querySelectorAll(".menu-section");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveClass() {
    let currentPos = window.pageYOffset;
    menuSections.forEach((section) => {
        if (
            section.offsetTop - headerHeight <= currentPos &&
            section.offsetTop + section.offsetHeight > currentPos
        ) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (section.id === link.getAttribute("href").substring(1)) {
                    link.classList.add("active");
                }
            });
        }
    });
}