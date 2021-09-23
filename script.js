//-------------Automatiskt bildspel- Startsida---------
let images = ['img/Bildspel/1.jpg', 'img/Bildspel/2.jpg', 'img/Bildspel/3.jpg', 'img/Bildspel/4.jpg'];
let i = 0; 
let interval;
let isGoing;
let btnBildspel = document.getElementById('buttonBildspel');

window.addEventListener('load', startSlideShow());

btnBildspel.addEventListener('click', function(){
    if(isGoing === true){
        stopSlideShow();
        btnBildspel.setAttribute('src', 'img/Bildspel/buttonStart.jpg');
    }
    else{
        startSlideShow();
        btnBildspel.setAttribute('src', 'img/Bildspel/buttonStopp.jpg');
    }
});

function startSlideShow(){
    interval = setInterval(changeImg, 1700);
    isGoing = true;
}

function stopSlideShow(){
    clearInterval(interval);
    isGoing = false;
}

function changeImg(){
    document.getElementById('startBildspel').setAttribute('src', images[i]);
        
    i++;
    if(i == images.length){
        i= 0; 
    }
}