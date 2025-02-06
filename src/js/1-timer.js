// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // onClose(selectedDates) {
  //   console.log(selectedDates[0]);
  // },
};

const refs = {
  button : document.querySelector("[data-start]"),
  days : document.querySelector("[data-days]"),
  hours : document.querySelector("[data-hours]"),
  minutes : document.querySelector("[data-minutes]"),
  seconds : document.querySelector("[data-seconds]"),
}
refs.hours.textContent="02";
const time ={
  start(){
    
  },
  stop(){

  }
};

// console.log(selectedDates[0]);

refs.button.addEventListener("click", ()=>{
  time.start();
  console.log(fp.selectedDates[0]);
  // console.log(options.onClose());
})

// import pathSuccessIcon from "./img/success-icon.svg";
// import pathErrorIcon from "./img/error-icon.svg";

// const iconUrl = status ? pathSuccessIcon : pathErrorIcon;
const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);
// options.onClose(fr);
// console.log(options.userSelectedDate);



iziToast.show({
  message:"Please choose a date in the future",
  position:"topRight",
  messageColor: 'white',
  backgroundColor: "red",
});

// console.log(fp.selectedDates[0]);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days, hours, minutes, seconds
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
 
function addLeadingZero(value){
  // padStart()
}
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// console.log(fp.currentMonth);