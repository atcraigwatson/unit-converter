import "./style.css";

function getEl(selector) {
  return document.querySelector(selector);
}

const inputEl = getEl("#unit-input");
const btnEl = getEl("#btn-convert");
const lengthEl = getEl("#output-length");
const volumeEl = getEl("#output-volume");
const massEl = getEl("#output-mass");

btnEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  let calcLengthFeet = inputValue * 3.2808;
  let calcLengthMeeters = inputValue * 0.3048;
  let calcVolumeLiters = inputValue * 4.54609;
  let calcVolumeGallons = inputValue * 0.219969;
  let calcMassKilos = inputValue * 0.453592;
  let calcMassPounds = inputValue * 2.20462;

  lengthEl.textContent = `${inputValue} meters = ${calcLengthFeet} feet | ${inputValue} feet = ${calcLengthMeeters} meters`;
  volumeEl.textContent = `${inputValue} liters = ${calcVolumeGallons} gallons | ${inputValue} gallons = ${calcVolumeLiters} liters`;
  massEl.textContent = `${inputValue} kilos = ${calcMassPounds} pounds | ${inputValue} pounds = ${calcMassKilos} kilos`;
});
