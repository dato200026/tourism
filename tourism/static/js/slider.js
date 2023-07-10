//carousel elements
const nextBtn=document.querySelector('.next-slide');
const prevBtn=document.querySelector('.prev-slide');
const slides=document.querySelectorAll('.slider .slide');
const sliderText=document.querySelector('.slider-text h1');

// carousel object array
sliderArray=[
    "discover greeece",
    "travel in indonesia",
    "spent time in marroco",
    "discover france",
    "great journey in magadaskar",
    "enjoy canada sightseeing",
];

//slider initial appearance
slides.forEach((slide,indx) =>{
    slide.style.transform=`translateX(${indx*100}%)`;
    sliderText.innerHTML=sliderArray[0];
    slide.style.background=`url(static/images/first-section-images/first-section-background/first-section-background-${indx+1}.png)`;
    slide.style.backgroundSize='cover';
});

//slide variables
let currentSlide=0;
const maxSlides=slides.length-1; 

/* slider after clicking buttons
previous button */
prevBtn.addEventListener('click',() =>{
    if(currentSlide === 0){
        currentSlide=maxSlides;
    }
    else {
        currentSlide--;
    }
    slides.forEach((slide,indx) =>{
        slide.style.transform=`translateX(${(indx-currentSlide)*100}%)`;
        sliderText.innerHTML=sliderArray[currentSlide];
    });
});

nextBtn.addEventListener('click',() =>{
    if(currentSlide === maxSlides){
        currentSlide=0;
    }
    else {
        currentSlide++;
    }
    slides.forEach((slide,indx) =>{
        sliderText.innerHTML=sliderArray[currentSlide];
        slide.style.transform=`translateX(${(indx-currentSlide)*100}%)`;
    });
});