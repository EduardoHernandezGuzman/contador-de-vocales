import "bootstrap";
import "./style.css";

window.onload = function() {};

const result = document.querySelector(".result");
const btn = document.querySelector("#buttonClick");
const texto = document.querySelector(".form-control");

btn.addEventListener("click", countVowel);

function countVowel() {
  if (!texto.value) {
    return;
  }

  let vowelCount = 0;
  let wordVal = texto.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];

    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `
    <strong>${texto.value}</strong> tiene
    <strong>${vowelCount}</strong> vocales
  `;
}
