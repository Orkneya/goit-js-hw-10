// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// const delayInput = document.querySelector("input[name=delay]");
// console.log(delayInput);
const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  console.log(event.target.elements[1]);
  
  const delay = event.target.elements[0].value;
  const change = event.target.elements[1].value;

  // if (email === "" | password === ''){
  //   return console.log("All form fields must be filled in");
  // }
  console.log(`Delay : ${delay}  Change : ${change}`);
  event.target.reset();
});




// delayInput.addEventListener("input", evt=>{
//   // const delay = evt.currentTarget.elements;
//   console.log(evn);}
// )
// const delay = delayInput.currentTarget.elements.value;
// console.log(delay);

iziToast.show({
  message:"Please choose a date in the future",
  position:"topRight",
  messageColor: 'white',
  backgroundColor: "red",
});
iziToast.show({
  message:"Please choose a date in the future",
  position:"topRight",
  messageColor: 'white',
  backgroundColor: "green",
});
// `✅ Fulfilled promise in ${delay}ms`
// `❌ Rejected promise in ${delay}ms`

