const tabs = require('./js/tabs')
const popup = require('./js/popup')

const mobileMenu = document.querySelector('.mobile_menu')


document.querySelector('.header_menu').addEventListener('click',(event)=>{
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('visible')
})

mobileMenu.querySelector('.mobile_menu__close').addEventListener('click',(event)=>{
    mobileMenu.classList.remove('visible')
    mobileMenu.classList.add('hidden')
})

document.querySelector('.mobile_menu__links').addEventListener('click',(event)=>{
    mobileMenu.classList.remove('visible')
    mobileMenu.classList.add('hidden')
})

console.log('webPack')