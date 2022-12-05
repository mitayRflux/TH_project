
const timeList=document.querySelector('#time-list');

const timeSec = document.querySelector('#time');
let time = 0;
let  width = 600;
let  height = 450;
//var clicks = 0;

// создаём объект случайной локации цели
let  target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
 };
 


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
  if(current===0){ finishGame();}
  else{
    let current = --time;
    if(current<10){current=`0${current}`}
    setTime(current);
  }
  startGame();
}

function setTime(value){
  timeSec.innerHTML = `00:${value}`;
}

function finishGame(){
  
}

//получаем случайную координату
var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
 };
//считаем дистанцию до точки на которой клик
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
 };
 //выводим сообщения
 var getDistanceHint = function (distance) {
  if (distance < 10) {
  return "Boiling hot!";
  } else if (distance < 20) {
  return "Really hot";
  } else if (distance < 40) {
  return "Hot";
  } else if (distance < 80) {
  return "Warm";
  } else if (distance < 160) {
  return "Cold";
  } else if (distance < 320) {
  return "Really cold";
  } else {
  return "Freezing!";
  }
 };

 
/*
 $("#map").click(function (event) 
  clicks++;
  // Получить расстояние между событием щелчка и целью
var distance = getDistance(event, target);
  //Преобразуйте расстояние в подсказку
 var distanceHint = getDistanceHint(distance);
  // Обновите элемент #distance новой подсказкой
 $("#distance").text(distanceHint);
  // Если щелчок был достаточно близок, скажите им, что они выиграли
 { if (distance < 8) {
  alert("Found the treasure in " + clicks + " clicks!");
  }
 });
 
*/