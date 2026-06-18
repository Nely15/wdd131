const products = [
    {
        id: 1,
        name: "Birthday Gift Basket",
        price: 100,
        category: "Birthday",
        description: "A colorful basket filled with treats and celebration gifts.",
        image: "images/gift1.jpg"
    },

    {
        id: 2,
        name: "Graduation Gift Basket",
        price: 45,
        category: "Graduation",
        description:"A celebratory assortment filled with thoughtful treats to honor a new graduate’s big achievement.",
        image: "images/gift2.jpg"
        
    },

    {
        id: 3,
        name: "Flower Bouquet",
        price: 125,
        category: "Birthday",
        description:"A vibrant, elegant arrangement of fresh flowers perfect for brightening any birthday celebration.",
        image: "images/gift3.jpg"
    },

    {
        id: 4,
        name: "Father's Day Basket",
        price: 40,
        category: "Holiday",
        description:"A curated mix of goodies designed to show appreciation and make Dad feel special on his day.",
        image: "images/gift4.jpg"
    },

    {
        id: 5,
        name: "Father's Day Gift Basket",
        price: 45,
        category: "Holiday",
        description:"A thoughtful collection of treats and essentials crafted to celebrate and pamper Dad.",
        image: "images/gift5.jpg"
    },

    {
        id: 6,
        name: "Father's Day Medium Gift Basket",
        price: 20,
        category: "Holiday",
        description:"A budget‑friendly yet heartfelt basket packed with small surprises perfect for Father’s Day.",
        image: "images/gift6.jpg"
    },

    {
        id: 7,
        name: "Graduation Gift Basket: Secret Success",
        price: 60,
        category: "Graduation",
        description: " A motivational graduation basket filled with inspiring items to celebrate hard work and future success.",
        image: "images/gift7.jpg"
    },

    {
        id: 8,
        name: "Graduation Gift Basket: Racer Graduate",
        price: 45,
        category: "Graduation",
        description: " A fun, energetic gift set themed for graduates ready to speed into their next chapter.",
        image: "images/gift8.jpg"
    },

    {
        id: 9,
        name: "Graduation Gift Basket: Rising Star",
        price: 45,
        category: "Graduation",
        description: "A bright and uplifting basket designed to celebrate a graduate’s accomplishments and shining potential.",
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
        
            <img src="${product.image}" alt="${product.name}" loading="lazy">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p class="price">$${product.price}</p>

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

const sortSelect =
    document.querySelector("#sort");

if (sortSelect) {

    sortSelect.addEventListener("change", () => {

        let sortedProducts = [...products];

        if (sortSelect.value === "low") {

            sortedProducts.sort(
                (a, b) => a.price - b.price
            );

        }

        else if (sortSelect.value === "high") {

            sortedProducts.sort(
                (a, b) => b.price - a.price
            );

        }

        displayProducts(sortedProducts);

    });

}
