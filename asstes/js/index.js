/* ======== CHANGE BACKGROUND HEADER ======== */
function scrollHeader() {
    const header = document.getElementById('header')
    /* Quando a altura da barra de rolagem for maior que 50 pixels da altura da viewport, adicione a classe `scroll-header` à tag de cabeçalho. */
    if (this.scrollY >= 50) 
        header.classList.add('scroll-header')
    else
        header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)