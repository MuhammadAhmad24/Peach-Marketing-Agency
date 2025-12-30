const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const menuPanel = mobileMenu.querySelector('div');

// Open menu
burger.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => menuPanel.classList.remove('translate-x-full'), 10);
});

// Close menu
closeMenu.addEventListener('click', () => {
    menuPanel.classList.add('translate-x-full');
    setTimeout(() => mobileMenu.classList.add('hidden'), 300);
});

// Close when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        menuPanel.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    }
});