
const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById("menu-mobile")
hamburger.addEventListener('click', () => {
    
   if(menuMobile.style.display === 'none')
        menuMobile.style.display='block'
    else
        menuMobile.style.display='none'
});
