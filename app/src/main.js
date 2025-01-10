/*
import "./style.css";
import palettes from "./palettes.json";
console.log(palettes); // It's now regular JS code!
*/
//
//
// Stay focused Suru, you got this
//
//
// app/src/main.js
import {
  getPalettes,
  setPalettes,
  addPalette,
  removePalette,
  initPalettesIfEmpty,
} from "./local-storage.js";
import { createPaletteElement } from "./dom-helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  initPalettesIfEmpty();
  const palettesList = document.getElementById("palettesList");

  const palettes = getPalettes();
  Object.values(palettes).forEach((palette) => {
    const paletteElement = createPaletteElement(palette);
    palettesList.appendChild(paletteElement);
  });

  const paletteForm = document.getElementById("paletteForm");
  paletteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("paletteTitle").value;
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const color3 = document.getElementById("color3").value;
    const temperature = document.querySelector(
      'input[name="temperature"]:checked'
    ).value;

    const newPalette = {
      uuid: generateUUID(),
      title,
      colors: [color1, color2, color3],
      temperature,
    };

    addPalette(newPalette);
    const paletteElement = createPaletteElement(newPalette);
    palettesList.appendChild(paletteElement);
    paletteForm.reset();
  });
});

import { v4 as generateUUID } from "uuid";

const copyToClipboard = (hexCode) => {
  navigator.clipboard.writeText(hexCode).then(() => {
    // Modify the button's text to indicate success
    const button = event.target;
    button.textContent = "Copied hex!";
    setTimeout(() => {
      button.textContent = `Copy ${hexCode}`;
    }, 1000);
  });
};
