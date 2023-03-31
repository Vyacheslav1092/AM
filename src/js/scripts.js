document.addEventListener('DOMContentLoaded', function () {
    // клик по кнопкам инфо
    const buttonInfo = document.querySelectorAll('.js-card-info');
    const wraps = document.querySelectorAll('.js-card-inner');
    const popups = document.querySelectorAll('.js-card-popup');
    const body = document.body;

    buttonInfo.forEach((button, index) => {
        button.addEventListener('click', function (e) {
            e._stop = true;

            if (wraps[index].classList.contains('active')) {
                wraps[index].classList.remove('active');
            } else {
                wraps.forEach((wrap) => {
                    wrap.classList.remove('active');
                });
                wraps[index].classList.add('active');
            }
        });
    });

    popups.forEach((popup) => {
        popup.addEventListener('click', function (e) {
            e._stop = true;
        });
    });

    body.addEventListener('click', function (e) {
        if (e._stop) return;

        wraps.forEach((wrap) => {
            wrap.classList.remove('active');
        });
    });
    // конец

    // бургер клик
    const burger = document.querySelector('.js-burger');
    const burgerContent = document.querySelector('.js-burger-wrap');
    const burgerClose = document.querySelector('.js-burger-close');
    const burgerLinks = document.querySelectorAll('.js-header-link');
    const doc = document.querySelector('html');

    burger.addEventListener('click', function () {
        burgerContent.classList.add('active');
        doc.style.overflow = 'hidden';
    });

    burgerClose.addEventListener('click', function () {
        burgerContent.classList.remove('active');
        doc.style.overflow = 'visible';
    });

    burgerLinks.forEach((link) => {
        link.addEventListener('click', function () {
            burgerContent.classList.remove('active');
            doc.style.overflow = 'visible';
        });
    });
    // конец
});
