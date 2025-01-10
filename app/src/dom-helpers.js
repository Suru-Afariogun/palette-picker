// app/src/dom-helpers.js
export const createPaletteElement = (palette) => {
  const li = document.createElement("li");
  li.classList.add("palette");
  li.dataset.uuid = palette.uuid;

  palette.colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add("color-box");
    li.appendChild(colorDiv);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  return li;
};
