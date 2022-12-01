
const timeList=document.querySelector('#time-list');

const timeSec = document.querySelector('#time');
let time = 0;

//console.log(timeList);

timeList.addEventListener('click', (event)=>{
  if(event.target.classList.contains('time-switch')){
    time = parseInt(event.target.getAttribute('data-time'));
    startGame();
  }
});

function startGame(){
  setInterval(changTime,1000);
  setTime(time);
}

function changTime(){
  let current = --time;
  if(current<0){ finishGame();}
  else{
    if(current<10){current=`0${current}`}
  }
  setTime(current);
}

function setTime(value){
  timeSec.innerHTML = `00:${value}`;
}

function finishGame(){
  
}