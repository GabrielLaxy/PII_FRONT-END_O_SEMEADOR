function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "/PII_FRONT-END_O_SEMEADOR-main/IMAGENS/bars-solid (1).svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "/PII_FRONT-END_O_SEMEADOR-main/IMAGENS/xmark-solid.svg"
    }
}