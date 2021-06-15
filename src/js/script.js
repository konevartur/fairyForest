const modalMenu = document.querySelector('.modal-menu');
const modalMenuMobile = document.querySelector('.modal-menu-mobile');

const headerBtnMenu = document.querySelector('.header__btn_menu');
const headerBtnMenuMobile = document.querySelector('.header__btn_menu_mobile');

const modalMenuBtnClose = document.querySelector('.modal-menu__btn_close');
const modalMenuMobileBtnClose = document.querySelector('.modal-menu-mobile__btn_close');

headerBtnMenu.addEventListener('click', () => {
	modalMenu.style.display = 'block';
});

modalMenuBtnClose.addEventListener('click', () => {
	modalMenu.style.display = 'none';
});

headerBtnMenuMobile.addEventListener('click', () => {
	modalMenuMobile.style.display = 'block';
});

modalMenuMobileBtnClose.addEventListener('click', () => {
	modalMenuMobile.style.display = 'none';
});
