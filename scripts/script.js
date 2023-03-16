// Part 1

function validateForm() {
    const username = document.getElementById("username").value;
    const email = document. getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || !/^[a-zA-Z0-9]+$/.test(username)) {
        window.alert("Form submission failed: Invalid username. Username must contain only letters and numbers.");
        console.log("Form submission failed: Invalid username. Username must contain only letters and numbers.");
        return;
    }

    if (email === "" || !email.includes("@")){
        window.alert('Form submission failed: Invalid email. Email must include "@"');
        console.log('Form submission failed: Invalid email. Email must include "@"');
        return;
    }

    if (password === "" || !password.length < 8){
        window.alert("Form submission failed: Invalid password. Password must have at least 8 characters");
        console.log("Form submission failed: Invalid password. Password must have at least 8 characters");
        return;

    }

    windows.alert("Form submitted successfully");
    console.log("Form submitted sucessfully");

}

// Part 2

const products = [
    'Eye Shadow',
    'Mascara',
    'Primer',
    'Concealer',
    'Foundation',
    'Setting Powder',
    'Setting Spray',
    'Blush',
    'Highlighter',
    'Lipstick'

];

function displayProducts(productList, products) {
    productList.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        const li = document.createElement('li');
        li.textContent = products[i];
        productList.appendChild(li);
    }
}

function searchProducts(query, products) {
    return products.filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
    );
}

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
searchInput.addEventListener('input', function () {
    const query = searchInput.value;
    const filteredProducts = searchProducts(query, products);
    displayProducts(productList, filteredProducts);
});

displayProducts(productList, products);