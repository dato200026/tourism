const burgerMenu=document.querySelector('.burger-menu-icon');
const navList=document.querySelector('.header-nav-ul');
burgerMenu.addEventListener('click',() =>{
    navList.classList.toggle('header-nav-height');
    let navHeight=navList.getBoundingClientRect().height;

    if(navHeight>0){
        document.querySelector("section").style.marginTop=`${navHeight}px`;
    }
    else{
        document.querySelector("section").style.marginTop=`0`;
    }

    window.addEventListener('resize',() =>{
     if(window.innerWidth > 768){
         navList.classList.remove('header-nav-height');
         document.querySelector("section").style.marginTop=`0`;
     }
    });
});
