let hiddenParagraphs = document.querySelectorAll('.about-company__description--hidden');
let buttonAboutCompany = document.querySelector('.about-company__button');
let buttonTextClose = document.querySelector('.button__text--close');
let buttonTextOpen = document.querySelector('.button__text--open');

const hideParagraphs = () => {
  buttonAboutCompany.addEventListener('click', function () {
    if (buttonTextClose.classList.contains('hidden')) {
      buttonTextClose.classList.remove('hidden');
      buttonTextOpen.classList.add('hidden');
      hiddenParagraphs.forEach((element) => element.classList.add('hidden'));
    } else {
      buttonTextClose.classList.add('hidden');
      buttonTextOpen.classList.remove('hidden');
      hiddenParagraphs.forEach((element) => element.classList.remove('hidden'));
    }
  });
};

export {hideParagraphs};
