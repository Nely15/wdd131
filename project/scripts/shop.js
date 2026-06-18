const products = [
    {
        id: 1,
        name: "Birthday Gift Basket",
        price: 100,
        category: "Birthday",
        image: "images/gift1.jpg"
    },

    {
        id: 2,
        name: "Graduation Gift Basket",
        price: 45,
        category: "Graduation",
        image: "images/gift2.jpg"
    },

    {
        id: 3,
        name: "Flower Bouquet",
        price: 125,
        category: "Birthday",
        image: "images/gift3.jpg"
    },

    {
        id: 4,
        name: "Father's Day Basket",
        price: 40,
        category: "Holiday",
        image: "images/gift4.jpg"
    },

    {
        id: 5,
        name: "Father's Day Gift Basket",
        price: 45,
        category: "Holiday",
        image: "images/gift5.jpg"
    },

    {
        id: 6,
        name: "Father's Day Medium Gift Basket",
        price: 20,
        category: "Holiday",
        image: "images/gift6.jpg"
    },

    {
        id: 7,
        name: "Graduation Gift Basket: Secret Success",
        price: 60,
        category: "Graduation",
        image: "images/gift7.jpg"
    },

    {
        id: 8,
        name: "Graduation Gift Basket: Racer Graduate",
        price: 45,
        category: "Graduation",
        image: "images/gift8.jpg"
    },

    {
        id: 9,
        name: "Graduation Gift Basket: Rising Star",
        price: 45,
        category: "Graduation",
        image: "images/gift9.jpg"
    }
];

const productContainer =
    document.querySelector("#products");

const cartContainer =
    document.querySelector("#cartCount");
    
let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function displayProducts(productList) {
    
    productContainer.innerHTML = "";
    productList.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading ="lazy">
            
            <h3>${product.name}</h3>

            <p>$${product.price}</p>

            <button data-id="${product.id}">

            Add to Cart

            </button>
            `;
        
        productContainer.appendChild(card);

    });

    addCartEvents();

}

function addCartEvents() {
    const buttons =
        document.querySelectorAll("[data-id]");
    
    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            cart.push(id);

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            updateCart();

        })

    });

}

function updateCart() {
    
    cartContainer.textContent = cart.length;

}

displayProducts(products);

document
    .querySelectorAll(".filters button")
    .forEach(button => {
    
        button.addEventListener("click", () => {

            const category =
                button.dataset.category;
            
            if (category === "All") {
            
                displayProducts(products);

            }

            else {
                
                const filtered =
                    products.filter(product =>
                        product.category === category
                    );
                
                displayProducts(filtered);

            }

        });

    });
    
document
    .querySelector("#search")
    .addEventListener("input", e => {

        const search =
            e.target.value.toLowerCase();

        const results =

            products.filter(product =>
                product.name.toLowerCase().includes(search)
            );
        
        displayProducts(results);

    });
