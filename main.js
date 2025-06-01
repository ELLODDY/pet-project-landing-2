
const hide__button = document.querySelector('.hide__button');
const showAll__button = document.querySelector('.showAll__button__hidden');

hide__button.addEventListener('click', () => {
    hide__button.classList.toggle('hideButtonHidden');
    hiddenBransCard();
    showAll__button.classList.toggle('showAll__button__visible');
});

function hiddenBransCard() {
    const hiddenElements = document.querySelectorAll('.hidden');
    for (let i = 0; i < hiddenElements.length; i++) {
        const element = hiddenElements[i];
        element.classList.toggle('brandsHiddenString');
    };
};

showAll__button.addEventListener('click', () => {
    showAll__button.classList.remove('showAll__button__visible');
    hide__button.classList.remove('hideButtonHidden');
    hiddenBransCard();
});

const mainTextHidden = document.querySelector('.main__text--hidden');
const readFurther = document.querySelector('.readFurther__button--visible');
const mainTextChange = document.querySelector('.main__text__change');
const textHideButton = document.querySelector('.textHide__button--hidden');

readFurther.addEventListener('click', () => {
    readFurther.classList.toggle('readFurther__button--hidden');
    mainTextChange.textContent = ('Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов.');
    mainTextHidden.classList.toggle('main__text--visible');
    textHideButton.classList.toggle('textHide__button--visible');
});

textHideButton.addEventListener('click', () => {
    textHideButton.classList.remove('textHide__button--visible');
    mainTextChange.textContent = ('Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов...');
    mainTextHidden.classList.remove('main__text--visible');
    readFurther.classList.remove('readFurther__button--hidden');
})