const menu = document.querySelector('.header__body');
const menuBth = document.querySelector('.menu__icon')


const body = document.body


if(menu && menuBth){
    menuBth.addEventListener('click',() =>{
        menu.classList.toggle('active')
        menuBth.classList.toggle('active')
        body.classList.toggle('lock')
    })
}