const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyColor =document.querySelector('body');


stopBtn.disabled = true;

startBtn.addEventListener('click',startBtnClick)
stopBtn.addEventListener('click',stopBtnClick)

const changeBackColor=()=>bodyColor.style.backgroundColor = getRandomHexColor();

let intarvalId= null;

function startBtnClick(){
    intarvalId=setInterval(changeBackColor, 1000)

    startBtnClick.disabled= true;
    stopBtnClick.disabled= false;
};

function stopBtnClick() {
    clearInterval(intarvalId);

    startBtnClick.disabled= false;
    stopBtnClick.disabled= true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };