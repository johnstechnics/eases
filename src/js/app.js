import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

const videoPlay = () => {
    const btn = document.querySelector('.video__controls');
    const playBtn = document.querySelector('.video__play');
    const video = document.querySelector('.video__wrap video');

    playBtn.addEventListener('click', () => {
        video.play();
        video.controls = true;
        btn.style.display = 'none';
    });
};

videoPlay();

const footerYear = () => {
    document.querySelector('.footer__copy span').innerText = new Date().getFullYear();
};

footerYear();

const menuToggle = () => {
    let menu = document.querySelector('.header__menu');
    let menuItems = document.querySelectorAll('.header__menu .menu__item');
    let btn = document.querySelector('.menu-btn');
    let btnClose = document.querySelector('.menu__close');
    let body = document.querySelector('body');

    btn.addEventListener('click', () => {
        menu.classList.add('open');
        body.classList.add('menu-open');
    });

    btnClose.addEventListener('click', () => {
        menu.classList.remove('open');
        body.classList.remove('menu-open');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('open');
            body.classList.remove('menu-open');
        });
    });
};

menuToggle();
