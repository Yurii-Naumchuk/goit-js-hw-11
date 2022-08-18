// Напиши скрипт, який на момент сабміту форми викликає функцію
//  createPromise(position, delay) стільки разів, скільки ввели в поле amount.
//   Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, 
//   враховуючи першу затримку (delay), введену користувачем, і крок (step).

//   Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який 
//   виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт,
//    в якому будуть властивості position і delay зі значеннями однойменних параметрів. 
//    Використовуй початковий код функції для вибору того, що потрібно 
//    зробити з промісом - виконати або відхилити.

import Notiflix from 'notiflix';

Notiflix.Notify.init({
  fontSize: '20px',
  width: '500px',
  borderRadius: '30px',
  });

const form = document.querySelector('.form');
const firstDelayEl= document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    if(shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay});
      }
    }, delay);
  }); 
};

form.addEventListener('submit', onSubmitForm);

function onSubmitForm (evt) {
  evt.preventDefault();

  let delay = Number(firstDelayEl.value);
  let step = Number(delayStepEl.value);
  let amount = Number(amountEl.value);

  for (let position = 1; position <= amount; position ++) {
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms.`,)})
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms.`,)})
    delay += step;
  } 
}
