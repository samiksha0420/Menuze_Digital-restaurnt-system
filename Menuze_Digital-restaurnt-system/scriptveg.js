// Sample data for dropdown (You can replace it with dynamic data)
const items = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Fries', 'Fish'];

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