// script.js

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function addMoney() {
    alert("Add Money feature coming soon!");
}

function showAlert(service) {
    alert(service + " feature coming soon!");
}
