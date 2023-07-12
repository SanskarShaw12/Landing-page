burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
searchbar=document.querySelector('.searchbar');
navlist=document.querySelector('.navlist');
burger.addEventListener('click', ()=>
{
    navlist.classList.toggle('v-class-resp');
    searchbar.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

