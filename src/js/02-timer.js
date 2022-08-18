// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };
  
//   Notiflix.Notify.init({
//     fontSize: '26px',
//     width: '400px',
//     borderRadius: '40px',
//     });

// const inputEl = document.querySelector('#datetime-picker');
// const btnStart = document.querySelector('button[data-start]');
// const spanDays = document.querySelector('span[data-days]');
// const spanHours = document.querySelector('span[data-hours]');
// const spanMinutes = document.querySelector('span[data-minutes]');
// const spanSeconds = document.querySelector('span[data-seconds]');

// btnStart.addEventListener('click', getSelectedTime);

// function onClose(selectedDates) {
//     const currentTime = Date.now();
//     const ms = selectedDates[0] - currentTime;
//       if (ms < 0) {
//         Notiflix.Notify.failure("Введіть дату в майбутньому");
//         } else {
//           btnStart.removeAttribute('disabled', 'true');
//           Notiflix.Notify.success('Очікуйте таймер');   
//           }
//   };

//   function getSelectedTime() {   
//     timerStart();
//     btnStart.setAttribute('disabled', 'false');
//     };

//     function timerStart() {
//         inputEl.setAttribute('disabled', 'true');
//         const selectedDay = new Date(inputEl.value);
//         const selectedTimeMs = selectedDay.getTime(); 
        
//         const intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = selectedTimeMs - currentTime;
      
//           if (deltaTime < 0 && deltaTime > -1000) {
//             clearInterval(intervalId);
//             inputEl.removeAttribute('disabled', 'true');
//             Notiflix.Notify.success('Час закінчився');
//           } else {
//             updateTime(convertMs(deltaTime));
//           }
//         }, 1000);
//       };

//       function pad(value) {
//         return String(value).padStart(2, '0');
//       }
      
//       function padDays(value) {
//           if(value < 100) {
//           return String(value).padStart(2, '0');
//           } 
//         return String(value).padStart(3, '0');
//       }

// // flatpickr(element, {});





// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }

//   flatpickr(inputEl, options);
//   function updateTime({ days, hours, minutes, seconds }) {
//     spanDays.innerHTML = days;
//     spanHours.innerHTML = hours;
//     spanMinutes.innerHTML = minutes;
//     spanSeconds.innerHTML = seconds;
//   }