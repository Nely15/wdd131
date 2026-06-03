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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-33444.jpg"
    },
    {
        templeName: "San Antonio Texas",
        location: "San Antonio, Texas, United States",
        dedicated: "2005, May, 22",
        area: 16800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-55647-main.jpg"
    },
    {
        templeName: "Salt Lake ",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 328207,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho, United States",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-65841-main.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6-8",
        area: 143969,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },
    // Add more temple objects here...
];

const gallery = document.querySelector(".temple-gallery");

function displayTemples(temples) {

    gallery.innerHTML = "";

    temples.forEach(temple => {

        const card = document.createElement("figure");

        const image = document.createElement("img");

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        const caption = document.createElement("figcaption");

        caption.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(image);
        card.appendChild(caption);

        gallery.appendChild(card);

     });
}

displayTemples(temples);

const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);

const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);

const largeTemples = temples.filter(temple => temple.area > 90000);

const smallTemples = temples.filter(temple => temple.area < 10000);


document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("h1").textContent = "Home";

    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("h1").textContent = "Old Temples";

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("h1").textContent = "New Temples";

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("h1").textContent = "Large Temples";

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("h1").textContent = "Small Temples";

    displayTemples(smallTemples);
});

