burger= document.querySelector('.burger');
navbar= document.querySelector('.nav-list');
rightnav= document.querySelector('.right-nav')
navList= document.querySelector('.ul-list')



burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');


})