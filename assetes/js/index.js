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

/* ======== SERVICES MODAL ======== */
const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalClose = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/* ======== SCROLL SECTIONS ACTIVE LINK ======== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*='+ sectionId+']').classList.add('active-link')
        }else {
            document.querySelector('.nav-menu a[href*='+ sectionId+']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ======== DARK LIGHT THEME ======== */
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-Theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line'  ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ======== SCROLL REVEAL ANIMATION ======== */
const sr =  ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-data`)
sr.reveal(`.home-handle`, {delay: 700})
sr.reveal(`.home-social, .home-scroll`, {delay: 900, origin: 'bottom'})