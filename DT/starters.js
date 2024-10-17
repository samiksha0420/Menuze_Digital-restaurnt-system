// Sample data for dropdown (You can replace it with dynamic data)
const items = ['Hot & Sour', 'Tomato soup', 'Manchow Soup', 'Cream of Brocoli', 'Chiken Manchow', 'Paneer Chilli','Mushroom Chilli','veg65','Chicken Tandoori','Seekh Kebaab','Chicken chilli'];

// Function to filter items
function filterItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const dropdown = document.getElementById('dropdown');

    // Clear previous results
    dropdown.innerHTML = '';
    dropdown.style.display = 'none';

    // Filter and display matching items
    if (input) {
        const filteredItems = items.filter(item => item.toLowerCase().includes(input));
        filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('dropdown-item');
            div.textContent = item;
            div.onclick = () => {
                document.getElementById('searchInput').value = item;
                dropdown.style.display = 'none';
            };
            dropdown.appendChild(div);
        });
        dropdown.style.display = 'block';
    }
}
// Add to cart functionality
function addToCart(dishName) {
    let currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    if (currentCart[dishName]) {
        currentCart[dishName]++;
    } else {
        currentCart[dishName] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    updateCartBar();
    updateDishCount(dishName);
}

// Remove from cart functionality
function removeFromCart(dishName) {
    let currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    if (currentCart[dishName] && currentCart[dishName] > 0) {
        currentCart[dishName]--;
        if (currentCart[dishName] === 0) {
            delete currentCart[dishName];
        }
        localStorage.setItem('cart', JSON.stringify(currentCart));
        updateCartBar();
        updateDishCount(dishName);
    }
}

// Update the cart bar with the number of items added
function updateCartBar() {
    let currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let cartBar = document.getElementById('cart-bar');
    let totalItems = Object.values(currentCart).reduce((acc, curr) => acc + curr, 0);
    
    if (totalItems > 0) {
        cartBar.innerText = `${totalItems} item${totalItems > 1 ? 's' : ''} added to cart`;
        showCartBar();
    } else {
        hideCartBar(); // Hide the cart bar when no items are present
    }
}

// Update the displayed count for a specific dish
function updateDishCount(dishName) {
    let currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let dishCount = currentCart[dishName] || 0;
    document.getElementById('count-' + dishName).innerText = dishCount;
}

// Show the cart bar when an item is added
function showCartBar() {
    let cartBar = document.getElementById('cart-bar');
    cartBar.classList.add('show');
}

// Hide the cart bar when no items are present
function hideCartBar() {
    let cartBar = document.getElementById('cart-bar');
    cartBar.classList.remove('show');
}

// Redirect to the cart page when clicking on the cart bar
function goToCart() {
    window.location.href = 'cart.html'; // Assuming the cart page is named cart.html
}


window.onload = function() {
    updateCartBar();
updateDishCount('Paneer Chilli');
updateDishCount('Mushroom Chilli');
updateDishCount('Veg 65');
updateDishCount('Chicken Tandoori');
updateDishCount('Seekh Kebab');
updateDishCount('Chicken Chilli');
}



