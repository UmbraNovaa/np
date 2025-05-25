// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button'); // New close button

menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-right-full');
    mobileMenu.classList.add('right-0');
});

// Close mobile menu when the "X" button is clicked
mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.classList.remove('right-0');
    mobileMenu.classList.add('-right-full');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('right-0');
        mobileMenu.classList.add('-right-full');
    });
});

window.oncontextmenu = function () {
    return false;
}

// Handle form submission status messages
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');

    if (status && message) {
        // Create a notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            status === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});
