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

const time ={
  intervalId:null,
  delay:0,
  start(int){
    refs.button.ariaDisabled=true;
    this.intervalId=setInterval(()=>{
      const timeSet = convertMs(int-this.delay*1000);
      // console.log(timeSet);
      refs.days.textContent=timeSet.days.toString().padStart(2, "0");
      refs.hours.textContent=timeSet.hours.toString().padStart(2, "0");
      refs.minutes.textContent=timeSet.minutes.toString().padStart(2, "0");
      refs.seconds.textContent=timeSet.seconds.toString().padStart(2, "0");
      this.delay++;
      if ((this.delay*1000 -int)>=0){
        this.stop();
        refs.button.disabled=false;
      }
    },1000);
  },
  stop(){
    clearInterval(this.intervalId);
  }
};

const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);

refs.button.addEventListener("click", ()=>{
  time.stop();
  const timeMS = fp.selectedDates[0].getTime();
  console.log(fp.selectedDates[0]);
  
  
  const timeNow = Date.now();
  const interval = timeMS-timeNow;

  if ((interval)>0){
    refs.button.disabled=true;
    time.start(interval);
  } else {
    iziToast.show({
      message:"Please choose a date in the future",
      position:"topRight",
      messageColor: 'white',
      backgroundColor: "red",
    });
  };
})

// import pathSuccessIcon from "./img/success-icon.svg";
// import pathErrorIcon from "./img/error-icon.svg";

// const iconUrl = status ? pathSuccessIcon : pathErrorIcon;

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
 
