
const hide__button = document.querySelector('.hide__button');
const hidden__brand__buttons = document.querySelector('.hidden');
const showAll__button = document.querySelector('.showAll__button__hidden');

hide__button.addEventListener('click', () => {
    hide__button.classList.toggle('hideButtonHidden');
    hidden__brand__buttons.classList.toggle('brandsHiddenString');
    showAll__button.classList.toggle('showAll__button__visible');
});

showAll__button.addEventListener('click', () => {
    showAll__button.classList.remove('showAll__button__visible');
    hide__button.classList.remove('hideButtonHidden');
    hidden__brand__buttons.classList.remove('brandsHiddenString');
})