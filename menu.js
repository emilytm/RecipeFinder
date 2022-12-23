const menu =  document.getElementById('menu')
const modal = document.getElementById('modal')
const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click',() => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible',true)
        navToggle.setAttribute('background-image','url(./assets/close.png)')
    } else {
        primaryNav.setAttribute('data-visible',false)
    }
})