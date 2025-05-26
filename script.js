
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button'); // New close button

menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-right-full');
    mobileMenu.classList.add('right-0');
});

mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.classList.remove('right-0');
    mobileMenu.classList.add('-right-full');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('right-0');
        mobileMenu.classList.add('-right-full');
    });
});

window.oncontextmenu = function () {
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');

    if (status && message) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            status === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`;
        notification.textContent = message;

        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmationMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const action = "https://formsubmit.co/1859faba437acbab8d97a8240e792cdc";

        const response = await fetch(action, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            form.reset();
            confirmation.classList.remove('hidden');
        } else {
            confirmation.textContent = "❌ Failed to send message. Try again.";
            confirmation.classList.remove('hidden');
            confirmation.classList.replace('text-green-400', 'text-red-400');
        }
    });
});

