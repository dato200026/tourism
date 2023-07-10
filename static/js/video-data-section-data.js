const dataCardsObjectArray = 
[
  {
    cardImg: '1',
    dataNumber: 120859,
    dataTitle: 'HAPPY TRAVELLERS'
  },
  {
    cardImg: '2',
    dataNumber: 2594,
    dataTitle: 'SATISFIED TOURS'
  },
  {
    cardImg: '3',
    dataNumber: 854,
    dataTitle: 'DESTINATION'
  },
  {
    cardImg: '4',
    dataNumber: 978,
    dataTitle: 'HOTELS $ RESORTS'
  }
];
const cardContainer=document.querySelector('.satisfication-cards-container');

dataCardsObjectArray.forEach((obj,indx) =>{
  cardContainer.innerHTML +=
  `
      <div class="satisfication-card">
          <img src="static/images/third-section-images/third-section-data-images/card-image-${indx+1}.png">
          <h1 class="mainNumber">${(obj.dataNumber).toLocaleString()}</h1>
          <h3>${obj.dataTitle}</h3>
      </div>
  `
});

//operation Done
const numberContainer=document.querySelectorAll('.satisfication-card h1');
let operationDone=false;
window.addEventListener('scroll',function(){
  if(window.scrollY >= cardContainer.offsetTop){
    if(operationDone === true)
    {
      return ; 
    }
    else{
      dataCardsObjectArray.forEach((obj,indx) =>{
        let startNumber=0;
        let targetNumber=dataCardsObjectArray[indx].dataNumber;
        const numberArray=document.querySelectorAll('.mainNumber');
        const inter=setInterval(() =>
        {
          startNumber += 1;
          numberArray[indx].innerHTML=startNumber.toLocaleString();
          if(startNumber >= targetNumber)
          {
            clearInterval(inter);
            console.log(targetNumber);
          }       
        },0.1);
       });
  }
  operationDone=true;
  this.localStorage.setItem("operationDone",true);
}
});