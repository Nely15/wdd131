/*
Product Review Form
Author: Blanca Ruiz
*/
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem(
    "reviewCount",
    reviewCount
);

document.querySelector("#reviewCount").textContent = reviewCount;

