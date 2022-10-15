$(function () {

  const hamburger = document.getElementById('menu__btn');
  const headerMenu = document.getElementById('menu__list');
  const menuLink = document.querySelectorAll('.menu__link');
  const popUpBody = document.getElementById('popup');
  const openPopUp = document.querySelectorAll('.popup-open-btn');
  const closePopUp = document.getElementById('close-popup');


  $('.gallery__slider-items').slick({
    arrows: false,
    dots: true,
    fade: true,
  });


  hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('menu__list--active');
    hamburger.classList.toggle('menu__btn--open');
  })

  menuLink.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.classList.remove('menu__list--active');
      hamburger.classList.remove('menu__btn--open');
    })
  })

  openPopUp.forEach(link => {
    link.addEventListener('click', () => {
      popUpBody.classList.add('active-popup');
    })
  })



  closePopUp.addEventListener('click', () => {
    popUpBody.classList.remove('active-popup');
  })

});