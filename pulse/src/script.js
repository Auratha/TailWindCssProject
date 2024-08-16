const faq = document.getElementById('faq');
const footer = document.getElementById('footer');
const menuSection = document.getElementById('menu-section');

const hideArray = [faq,footer];

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {

    hideArray.forEach(element => {
        element.classList.toggle('hide');
    })

    menuSection.classList.toggle('fadeIn');
})