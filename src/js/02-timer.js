// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

const deadline = new Date(2022, 7, 20);

// const inputEl = document.querySelector('#datetime-picker');
// const btnStart = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');



function timer ()  {
    const today = new Date();
    const delta = deadline - today;
    console.log(delta);
    
    const seconds = Math.floor(delta/1000)%60;
    console.log(second);
    
    const minutes = Math.floor(delta/1000/60)%60;
    console.log(minutes);
    
    const hours = Math.floor(delta/1000/60/60)%24;
    console.log(hours);
    
    const days = Math.floor(delta/1000/60/60/24);
    console.log(days);

    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;

 
};

setInterval(timer, 1000);






