const myVideo=document.querySelector('.video-container video');
const playButtons=document.querySelectorAll('.playButton');
const durLine=document.querySelector('.skyblue-line');
const fullLine=document.querySelector('.duration-line');
const videoTime=document.querySelector('.video-time');
playButtons.forEach(button => {
    button.addEventListener('click',() =>{
        if(myVideo.paused ){
            myVideo.play();
            playButtons[0].style.display="none";
            playButtons[0].src="static/images/third-section-images/video-controls/main-play-button.png";
            playButtons[1].style.background='url(static/images/third-section-images/video-controls/pause-button-icon.png) no-repeat';
            console.log(playButtons.length);
        }
        else{
            myVideo.pause();
            playButtons[0].style.display="block";
            playButtons[1].style.background='url(static/images/third-section-images/video-controls/play-button-icon.png) no-repeat';
        }
    });
});
myVideo.addEventListener('timeupdate',() =>{
    curTime=myVideo.currentTime;
    durLine.style.width=`${(curTime/myVideo.duration)*100}%`;
    if(curTime % 60 <10 && curTime < 600 ){
        videoTime.innerHTML='0'+Math.floor(curTime/60)+":"+'0'+Math.floor(curTime % 60);
    }
    else if(curTime % 60 <10 && curTime>600){
        videoTime.innerHTML=Math.floor(curTime/60)+":"+'0'+Math.floor(curTime % 60);
    }
    else if(curTime % 60 >10 && curTime<600){
        videoTime.innerHTML='0'+Math.floor(curTime/60)+":"+Math.floor(curTime % 60);
    }
    else{
        videoTime.innerHTML=Math.floor(curTime/60)+":"+Math.floor(curTime % 60);
    }
    fullLine.addEventListener('click',event => {
        const quotient=event.offsetX/fullLine.offsetWidth;
        durLine.style.width=`${quotient*100}%`;
        myVideo.currentTime=quotient*myVideo.duration;
    });
    if(myVideo.currentTime === myVideo.duration){
        playButtons[0].style.display="block";
        playButtons[0].src="static/images/third-section-images/video-controls/replay.png";
        playButtons[1].style.background='url(static/images/third-section-images/video-controls/play-button-icon.png) no-repeat';
    }

});
