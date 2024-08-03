/*
const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById("menu-mobile")
hamburger.addEventListener('click', () => {
    
   if(menuMobile.style.display === 'none')
        menuMobile.style.display='block'
    else
        menuMobile.style.display='none'
});*/

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('close-btn');
    const content = document.querySelector('.content');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
        content.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
        content.classList.remove('open');
    });
});