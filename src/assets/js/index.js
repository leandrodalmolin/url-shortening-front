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

/**
 * Snippet :: Handles form submit
 */
const form = document.querySelector('.js-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('http://shrl.netlify.app/shorten',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullUrl: formData.get('fullUrl')
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
});