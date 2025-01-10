// app/src/local-storage.js
export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : {};
  } catch (error) {
    console.error("Error reading from localStorage", error);
    return {};
  }
};

export const setPalettes = (newPalettes) => {
  setLocalStorageKey("palettes", newPalettes);
};

export const getPalettes = () => {
  return getLocalStorageKey("palettes");
};

export const initPalettesIfEmpty = () => {
  const palettes = getPalettes();
  if (Object.keys(palettes).length === 0) {
    // Default palettes if empty
    const defaultPalettes = {
      "5affd4e4-418d-4b62-beeb-1c0f7aaff753": {
        uuid: "5affd4e4-418d-4b62-beeb-1c0f7aaff753",
        title: "Marcy",
        colors: ["#c92929", "#2f5a8b", "#327a5f"],
        temperature: "neutral",
      },
      // Add other default palettes...
    };
    setPalettes(defaultPalettes);
  }
};

export const addPalette = (newPalette) => {
  const palettes = getPalettes();
  palettes[newPalette.uuid] = newPalette;
  setPalettes(palettes);
};

export const removePalette = (uuid) => {
  const palettes = getPalettes();
  delete palettes[uuid];
  setPalettes(palettes);
};
