const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click',()=>{
    nav.classList.toggle('show-menu');
},{passive: true})



