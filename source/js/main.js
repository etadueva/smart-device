import {initModals} from './modules/modals/init-modals';
import {switchAccordion} from './modules/accordion';
import {hideParagraphs} from './modules/about-company';
import IMask from 'imask';
import SmoothScroll from 'smooth-scroll';

let siteSectionsButton = document.querySelector('.button--site-sections');
let ourOfficeButton = document.querySelector('.button--our-office');
let siteSettingList = document.querySelector('.footer-list--site-sections');
let ourOfficeList = document.querySelector('.footer-list--our-office');
let inputMask = document.querySelector('.form__input--phone');
let modalInputMask = document.querySelector('.form__input--phone-modal');


let maskOptions = {
  mask: '+{7}(000)000-00-00',
};

window.addEventListener('DOMContentLoaded', () => {

  let mask = new IMask(inputMask, maskOptions);
  let modalMask = new IMask(modalInputMask, maskOptions);
  const maskTel = () => {
    return mask;
  };

  const modalMaskTel = () => {
    return modalMask;
  };

  let scroll = new SmoothScroll('a[href*="#"]');
  const scrollSmooth = () => {
    return scroll;
  };

  switchAccordion();
  hideParagraphs();
  maskTel();
  modalMaskTel();
  scrollSmooth();

  window.addEventListener('load', () => {
    initModals();
  });

  siteSettingList.classList.remove('footer-list--nojs');
  ourOfficeList.classList.remove('footer-list--nojs');
  ourOfficeButton.classList.add('button--plus-icon');
  siteSectionsButton.classList.add('button--plus-icon');
});
