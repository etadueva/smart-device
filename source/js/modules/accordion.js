let siteSectionsButton = document.querySelector('.button--site-sections');
let ourOfficeButton = document.querySelector('.button--our-office');
let siteSettingList = document.querySelector('.footer-list--site-sections');
let ourOfficeList = document.querySelector('.footer-list--our-office');
// '.button--minus-icon'

const switchAccordion = () => {
  siteSectionsButton.addEventListener('click', function () {
    if (siteSectionsButton.classList.contains('button--plus-icon')) {
      siteSectionsButton.classList.remove('button--plus-icon');
      siteSectionsButton.classList.add('button--minus-icon');
      ourOfficeButton.classList.remove('button--minus-icon');
      ourOfficeButton.classList.add('button--plus-icon');
      siteSettingList.classList.remove('footer-list--close');
      siteSettingList.classList.add('footer-list--open');
      ourOfficeList.classList.remove('footer-list--open');
      ourOfficeList.classList.add('footer-list--close');
    } else {
      siteSectionsButton.classList.add('button--plus-icon');
      siteSectionsButton.classList.remove('button--minus-icon');
      ourOfficeButton.classList.add('button--minus-icon');
      ourOfficeButton.classList.remove('button--plus-icon');
      siteSettingList.classList.add('footer-list--close');
      siteSettingList.classList.remove('footer-list--open');
      ourOfficeList.classList.add('footer-list--open');
      ourOfficeList.classList.remove('footer-list--close');
    }
  });

  ourOfficeButton.addEventListener('click', function () {
    if (siteSectionsButton.classList.contains('button--plus-icon')) {
      siteSectionsButton.classList.remove('button--plus-icon');
      siteSectionsButton.classList.add('button--minus-icon');
      ourOfficeButton.classList.remove('button--minus-icon');
      ourOfficeButton.classList.add('button--plus-icon');
      siteSettingList.classList.remove('footer-list--close');
      siteSettingList.classList.add('footer-list--open');
      ourOfficeList.classList.remove('footer-list--open');
      ourOfficeList.classList.add('footer-list--close');
    } else {
      siteSectionsButton.classList.add('button--plus-icon');
      siteSectionsButton.classList.remove('button--minus-icon');
      ourOfficeButton.classList.add('button--minus-icon');
      ourOfficeButton.classList.remove('button--plus-icon');
      siteSettingList.classList.add('footer-list--close');
      siteSettingList.classList.remove('footer-list--open');
      ourOfficeList.classList.add('footer-list--open');
      ourOfficeList.classList.remove('footer-list--close');
    }
  });
};

export {switchAccordion};
