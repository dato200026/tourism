const cardsObjectArray = 
[
    {
        cardImage: '1',
        cardName: 'FLIGHT BOOKING',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '2',
        cardName: 'HOTEL & RESORT BOOKING',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '3',
        cardName: 'FAMILY TRIP PLANNER',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '4',
        cardName: 'CRUISE TOUR',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '5',
        cardName: 'FIRE CAMP',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        cardImage: '6',
        cardName: 'CORPORATE HOLIDAYS',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    }
]

let cardsContainer=document.querySelector('.hot-services-right');
cardsObjectArray.forEach(obj => {
    cardsContainer.innerHTML +=
    `   
    <div class="hot-services-card">
        <img src="static/images/second-section-images/second-section-right/second-section-right-img-${obj.cardImage}.png">
        <h3>${obj.cardName}</h3>
        <p>${obj.description}</p>
    </div>
    `
});

//generated card list and modal
const completeCardsList=document.querySelectorAll('.hot-services-card');
const cardModal=document.querySelector('.hot-services-modal');

//display modal by clicking this cards
completeCardsList.forEach((card,indx)=>{
    card.addEventListener('click',function(){
        cardModal.innerHTML=  
        `
        <span>X</span>
        <img src="static/images/second-section-images/second-section-right/second-section-right-img-${indx+1}.png">
        <h1>${cardsObjectArray[indx].cardName}</h1>
        <p>${cardsObjectArray[indx].description}</p>
        `
        cardModal.style.display="flex";
    });
});

//exit function
cardModal.addEventListener('click',event => {
    if(event.target.matches(".hot-services-modal span") || !event.target.closest(".hot-services-modal")){
        cardModal.style.display="none";
    }
});
    

