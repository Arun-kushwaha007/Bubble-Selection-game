var timer=60;
var score= 0;
var hitrn=0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
    var clutter='';

for(var i=1; i<120; i++){
    var rand= Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rand}</div>`;
}
document.querySelector("#bottom_panel").innerHTML=clutter;
}

function runTimer(){
    var timeint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }else{
            clearInterval(timeint);
            document.querySelector("#bottom_panel").innerHTML=`<h1>Game Over</h1>`
        }
        
    },1000);
    
}

document.querySelector("#bottom_panel").addEventListener("click",function(detail){
    var Clickednum= Number(detail.target.textContent);
    if(Clickednum=== hitrn){
        increaseScore();
        getNewHit();
        makeBubble();

    }
})

runTimer(); 
makeBubble();
getNewHit();