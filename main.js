// Кнопки скрыть/показать, скрытие плашек

document.querySelectorAll('.technicsAndButtons').forEach(section => {
    const hideBtn = section.querySelector('.hide__button');
    const showBtn = section.querySelector('.showAll__button__hidden');

     // Функция для скрытия/показа элементов
    function toggleItems() {
        const hiddenItems = section.querySelectorAll('.hidden');
        hiddenItems.forEach(item => item.classList.toggle('brandsHiddenString'));
    }

    hideBtn.addEventListener('click', () => {
    toggleItems();
    // Прячем “Скрыть”, показываем “Показать все”
    hideBtn.classList.add('brandsHiddenString');
    showBtn.classList.add('showAll__button__visible');
    });

    showBtn.addEventListener('click', () => {
    toggleItems();
    // Прячем “Показать все”, возвращаем “Скрыть”
    showBtn.classList.remove('showAll__button__visible');
    hideBtn.classList.remove('brandsHiddenString');
    });
});


// Скрытие текста

const mainTextHidden = document.querySelector('.main__text--hidden');
const readFurther = document.querySelector('.showAllButton--visible');
const mainTextChange = document.querySelector('.main__text__change');
const textHideButton = document.querySelector('.hideButton--hidden');

readFurther.addEventListener('click', () => {
    readFurther.classList.toggle('showAllButton--hidden');
    mainTextChange.textContent = ('Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов.');
    mainTextHidden.classList.toggle('main__text--visible');
    textHideButton.classList.toggle('hideButton--visible');
});

textHideButton.addEventListener('click', () => {
    textHideButton.classList.remove('hideButton--visible');
    mainTextChange.textContent = ('Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов...');
    mainTextHidden.classList.remove('main__text--visible');
    readFurther.classList.remove('showAllButton--hidden');
});


// Swiper

function initResponsiveSwiper(selector) {
  let instance = null;

  function handleBrandsSwiper() {
    const isMobile = window.matchMedia('(max-width: 425px)').matches;
    const container = document.querySelector(selector);
    if (!container) return;

    if (isMobile && !instance) {
      // Создаём Swiper, если мобильный и ещё не создан
      instance = new Swiper(container, {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
        },
        mousewheel: true,
      });
    } 
    else if (!isMobile && instance) {
      // Удаляем Swiper, если перешли на десктоп (>425px)
      instance.destroy(true, true);
      instance = null;
    }
  }

  window.addEventListener('DOMContentLoaded', handleBrandsSwiper);
  window.addEventListener('resize', handleBrandsSwiper);
}

initResponsiveSwiper('.swiper-1');
initResponsiveSwiper('.swiper-2');
initResponsiveSwiper('.swiper-3');


// let brandsSwiper = null;

//   function handleBrandsSwiper() {
//     const isMobile = window.matchMedia('(max-width: 425px)').matches;

//     if (isMobile && !brandsSwiper) {
//       // Создаём Swiper, если мобильный и ещё не создан
//       brandsSwiper = new Swiper('.swiper', {
//         direction: 'horizontal',
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//         mousewheel: true,
//       });
//     } 
//     else if (!isMobile && brandsSwiper) {
//       // Удаляем Swiper, если перешли на десктоп (>425px)
//       brandsSwiper.destroy(true, true);
//       brandsSwiper = null;
//     }
//   }

//   window.addEventListener('DOMContentLoaded', handleBrandsSwiper);
//   window.addEventListener('resize', handleBrandsSwiper);


// // Универсальный свайпер

// const swiperContainers = document.querySelectorAll('.swiper');

// const sliders = Array.from(swiperContainers).map(container => ({
//   container,
//   instance: null
// }));

// function handleBrandsSwiper() {
//     const isMobile = window.matchMedia('(max-width: 425px)').matches;

//     sliders.forEach((slider) => {
//     const { container, instance } = slider;

//     if (isMobile && !instance) {
//       // Создаём Swiper, если мобильный и ещё не создан
//       slider.instance = new Swiper(container, {
//         direction: 'horizontal',
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//         mousewheel: true,
//       });
//     }
//     else if (!isMobile && instance) {
//       // Удаляем Swiper, если перешли на десктоп (>425px)
//       instance.destroy(true, true);
//       slider.instance = null;
//     };
//   });
// };

//   window.addEventListener('DOMContentLoaded', handleBrandsSwiper);
//   window.addEventListener('resize', handleBrandsSwiper);