

const timeList=document.querySelector('#time-list');

const timeSec = document.querySelector('#time');

const map = document.querySelector('#map');

const message = document.querySelector('#message');
const result = document.querySelector('#result');

let time = 0;
let  width = 600;
let  height = 450;
let stopId;
//var clicks = 0;

// создаём объект случайной локации цели
let  target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
 };
 

timeList.addEventListener('click', (event)=>{
  if(event.target.classList.contains('time-switch')){
    time = parseInt(event.target.getAttribute('data-time'));
    startGame();
  }
});

function startGame(){
   stopId = setInterval(startTime,1000);
    setTime(time);
  }

function startTime(){
  if(time === 0){
    finishGame();
  }else{
    let current = --time;
    if (current<10){
      current = `0${current}`;
    }
   setTime(current);  
  }
}

function setTime(value){
  timeSec.innerHTML = `00:${value}`;
}

function finishGame(){
  if(time===0 || distance>8){
    result.classList.remove('col-md-4');
    result.classList.add('col-12');
   message.innerHTML = `<h1>Неудача!Попробуй ещё!</h1>`;
   relInterval(3000);
  }
}
function relInterval(time){
  setInterval(function(){
  location.reload();
  }, time);}



map.addEventListener('click', (event)=>{
  let distance = getDistance(event,target);
  let hint = getDistanceHint(distance);
  message.innerHTML = `<h3>${hint}</h3>`;
  if(distance<8){
    result.classList.remove('col-md-4');
    result.classList.add('col-12');
   message.innerHTML = `<h1>Поздравляю!Клад найден!!</h1>`;
   clearInterval(stopId);
   relInterval(3000);
  }
}
);

//получаем случайную координату
function getRandomNumber (size) {
  return Math.floor(Math.random() * size);
 };
//считаем дистанцию до точки на которой клик
function getDistance (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
 }
 //выводим сообщения
  function getDistanceHint  (distance) {
  if (distance < 10) {
  return "Жарко!";
  } else if (distance < 20) {
  return "Очень горячо!";
  } else if (distance < 40) {
  return "Горячо";
  } else if (distance < 80) {
  return "Прохладно";
  } else if (distance < 160) {
  return "Холодно!";
  } else if (distance < 320) {
  return "Очень холодно!";
  } else {
  return "Мороз!";
  }
 }

