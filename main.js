import { correctColors, numberChoices } from "./script/tabl.js";

const CONTAINER = document.querySelector("#container");

let numberTry = 0;

const isCorrect = () => {
  const selects = CONTAINER.querySelectorAll("select");
  let allCorrect = true;
  let allSelected = true;

  selects.forEach((select, index) => {
    const selectedValue = select.value;
    const expectedValue = `${numberChoices[index].value}_${correctColors[index]}`;

    if (selectedValue === "") {
      allSelected = false;
    } else if (selectedValue.toLowerCase() !== expectedValue.toLowerCase()) {
      allCorrect = false;
    }
  });

  // Nombre de tentative
  // if (numberTry === 12) {
  //   CONTAINER.innerHTML = `<p>Vous avez perdu !</p>`;
  //   return;
  // }

  // numberTry++;
  // console.log(numberTry);

  if (allSelected && allCorrect) {
    CONTAINER.innerHTML = `<p>Bien joué !</p>`;
  }
};

const generateSelectElement = () => {
  let htmlContent = "";
  numberChoices.forEach((choice) => {
    htmlContent += `<select name="colors_${choice.value}">`;
    htmlContent += `<option value="">Couleur</option>`;

    choice.colors.forEach((color) => {
      htmlContent += `<option id="value" value="${
        choice.value
      }_${color.toLowerCase()}">${color}</option>`;
    });

    htmlContent += `</select>`;
  });
  CONTAINER.innerHTML = htmlContent;

  CONTAINER.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", isCorrect);
  });
};
generateSelectElement();
