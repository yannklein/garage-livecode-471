// TODO: give a badass name to your garage
import { getCars, postCar } from "./car";
const myBadAssGarage = "vin-diesel-import";
// DON'T CHANGE THIS LINE
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");
// //////////////////////
const submit = document.querySelector("#submit-btn");

getCars();

submit.addEventListener("click", postCar);
