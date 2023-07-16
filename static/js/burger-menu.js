const burgerMenu=document.querySelector('.burger-menu-icon');
const navList=document.querySelector('.header-nav-ul');
burgerMenu.addEventListener('click',() =>{
    navList.classList.toggle('header-nav-height');
    const navHeight=navList.getBoundingClientRect().height;
    if(navHeight>0){
        document.querySelector("section").style.marginTop=`${navHeight}px`;
    }
    else{
        document.querySelector("section").style.marginTop=`0`;
    }
});