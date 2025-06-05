
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

let brandsSwiper = null;

  function handleBrandsSwiper() {
    const isMobile = window.matchMedia('(max-width: 425px)').matches;

    if (isMobile && !brandsSwiper) {
      // Создаём Swiper, если мобильный и ещё не создан
      brandsSwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        mousewheel: true,
      });
    } 
    else if (!isMobile && brandsSwiper) {
      // Удаляем Swiper, если перешли на десктоп (>425px)
      brandsSwiper.destroy(true, true);
      brandsSwiper = null;
    }
  }

  window.addEventListener('DOMContentLoaded', handleBrandsSwiper);
  window.addEventListener('resize', handleBrandsSwiper);


// let swiperInstance = null;

// function initSwiper() {
//   if (window.innerWidth <= 768 && !swiperInstance) {

//     const swiperInstance = new Swiper('.swiper', {
        
//         direction: 'horizontal',
//         loop: true,
//         slidesPerView: 1, // Кол-во видимых слайдов
//         spaceBetween: 10,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         mousewheel: true,
//     });

//   } else if (window.innerWidth > 768 && swiperInstance) {
//     swiperInstance.destroy();
//     swiperInstance = null;
//     }
// }

// initSwiper();

// // Вызов при изменении размера окна
// window.addEventListener('resize', initSwiper);