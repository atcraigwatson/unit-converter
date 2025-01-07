import "./style.css";

function getEl(selector) {
  return document.querySelector(selector);
}

const inputEl = getEl("#unit-input");
const btnEl = getEl("#btn-convert");
const lengthEl = getEl("#output-length");
const volumeEl = getEl("#output-volume");
const massEl = getEl("#output-mass");
