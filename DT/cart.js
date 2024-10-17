// Sample cart data to simulate the items in the cart
let cart = {
    "Hot & Sour Soup": { quantity: 2, price:275 },
    "Tomato Soup": { quantity: 1, price: 250 },
    "Manchow Soup": { quantity: 1, price:280 }
};

// Function to load cart items dynamically
function loadCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    let itemTotal = 0;

    // Clear any existing items
    cartItemsContainer.innerHTML = '';

    // Iterate through the cart object and add items
    for (const itemName in cart) {
        const item = cart[itemName];
        const itemTotalPrice = item.quantity * item.price;
        itemTotal += itemTotalPrice;

        const cartItem = `
            <div class="cart-item">
                <img src="hotsour.jpeg" alt="${itemName}">
                <div class="cart-item-details">
                    <h4>${itemName}</h4>
                    <span>Quantity: ${item.quantity}</span>
                    <span>Price: ₹${item.price.toFixed(2)}</span>
                </div>
                <div class="quantity-controls">
                    <span>Total: ₹${itemTotalPrice.toFixed(2)}</span>
                </div>
            </div>
        `;

        cartItemsContainer.innerHTML += cartItem;
    }

    // Update the bill summary
    const gstRate = 0.05; // 5% GST
    const gstAmount = itemTotal * gstRate;
    const grandTotal = itemTotal + gstAmount;

    document.getElementById("item-total").innerText = `₹${itemTotal.toFixed(2)}`;
    document.getElementById("gst").innerText = `₹${gstAmount.toFixed(2)}`;
    document.getElementById("grand-total").innerText = `₹${grandTotal.toFixed(2)}`;
}

// Function to handle the order placement
function placeOrder() {
    alert("Order has been placed successfully!");
    // Clear cart after order is placed (optional)
    cart = {};
    loadCartItems();
}

// Load the cart items when the page loads
window.onload = function() {
    loadCartItems();
};
