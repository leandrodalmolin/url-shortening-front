import '../scss/main.scss';

/**
 * Snippet :: Toggles menu (open/close)
 */
const btnMenu = document.querySelector('.js-btn-menu');
const headerNavLinks = document.querySelector('.js-header-nav-links');
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('open');
    headerNavLinks.classList.toggle('open');
});

// Closes menu on "Escape"
document.addEventListener('keyup', (e) => {
    if (btnMenu.classList.contains('open') && e.code === 'Escape') {
        btnMenu.click();
    }
});