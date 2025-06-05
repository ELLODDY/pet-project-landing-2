const menu = document.querySelector('.sidebar__menu');
const items = document.querySelectorAll('.sidebar__menu__item');

items.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    menu.classList.add('hover-effect');
    });
    item.addEventListener('mouseleave', () => {
    menu.classList.remove('hover-effect');
  });
});

const langs = document.querySelectorAll('.lang');
    
langs.forEach((lang) => {
        lang.addEventListener('click', () => {
            langs.forEach((lang) => lang.classList.remove('lang--active'));
            lang.classList.add('lang--active');
        });
});