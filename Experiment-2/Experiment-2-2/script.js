const products = [
    { name: "Headphones", price: 1500 },
    { name: "Keyboard", price: 2500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 12000 },
    { name: "Speaker", price: 3000 },
    { name: "Webcam", price: 2200 }
];

const grid = document.getElementById("productGrid");
const sortSelect = document.getElementById("sortSelect");

function displayProducts(items) {
    grid.innerHTML = "";

    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
        `;

        grid.appendChild(card);
    });
}

displayProducts(products);

sortSelect.addEventListener("change", () => {
    let sortedProducts = [...products];

    if (sortSelect.value === "low-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } 
    else if (sortSelect.value === "high-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } 
    else if (sortSelect.value === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayProducts(sortedProducts);
});
