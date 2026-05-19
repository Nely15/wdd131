const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const now = new Date();

year.textContent = now.getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
    
});

