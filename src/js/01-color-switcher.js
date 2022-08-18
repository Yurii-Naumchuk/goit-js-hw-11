// Напиши скрипт, який після натискання кнопки «Start»,
//  раз на секунду змінює колір фону <body> на випадкове значення, 
//  використовуючи інлайн стиль. Натисканням на кнопку «Stop» 
//  зміна кольору фону повинна зупинятися.
//  Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
//  Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
//  Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor =document.querySelector('body');

stopBtn.disabled = true;
startBtn.style.background ='#50db2a';

startBtn.addEventListener('click',startBtnClick);
stopBtn.addEventListener('click',stopBtnClick);

const changeColor=()=>bodyColor.style.backgroundColor = getRandomHexColor();

let intervalId = null;

function startBtnClick(){
    intarvalId=setInterval(changeColor, 1000)

    startBtn.disabled= true;
    stopBtn.disabled= false;

    stopBtn.style.background = '#de632f';
    startBtn.style.background = '#eaf0e9';

};

function stopBtnClick() {
    clearInterval(intarvalId);

    startBtn.disabled= false;
    stopBtn.disabled= true;

    startBtn.style.background = '#50db2a';
    stopBtn.style.background = '#eaf0e9';
   
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

