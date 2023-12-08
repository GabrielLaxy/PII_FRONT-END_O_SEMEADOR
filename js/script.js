function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "IMAGENS/bars-solid-mobile.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "IMAGENS/xmark-solid.svg"
    }
}

 // Parallax

  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#apply-area').parallax({imageSrc: '../IMAGENS/x\ 1.jpg'});
  }, 200);