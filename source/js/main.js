import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {switchAccordion} from './modules/accordion';
import {hideParagraphs} from './modules/about-company';
// import {scroll} from './modules/scroll';

let siteSectionsButton = document.querySelector('.button--site-sections');
let ourOfficeButton = document.querySelector('.button--our-office');
let siteSettingList = document.querySelector('.footer-list--site-sections');
let ourOfficeList = document.querySelector('.footer-list--our-office');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  switchAccordion();
  hideParagraphs();
  // scroll();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });

  siteSettingList.classList.remove('footer-list--nojs');
  ourOfficeList.classList.remove('footer-list--nojs');
  ourOfficeButton.classList.add('button--plus-icon');
  siteSectionsButton.classList.add('button--plus-icon');
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
