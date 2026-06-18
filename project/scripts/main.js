const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}