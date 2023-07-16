const scrollBtn=document.querySelector('.scroll-to-top');
const sliderContainer=document.querySelector('#slider-section');
window.addEventListener('scroll',() =>{
    if(window.scrollY < sliderContainer.offsetTop){
        scrollBtn.style.transform=`translateY(${200}px)`;
    }
    else{
        scrollBtn.style.transform=`translateY(${0})`;
    }
})