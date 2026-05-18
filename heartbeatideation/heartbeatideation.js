  const fonts = [
  "Inter Tight",
  "Jacquard 12 Charted",
  "Jersey 10",
  "Micro 5 Charted",
  "Pixelify Sans",
  "Rubik Broken Fax",
  "Silkscreen",
  "Syne Mono",
  "Doto"
];

const button = document.querySelector("h1");
const buttonText = button.textContent;
button.textContent = "";

[...buttonText].forEach(char => {
  const buttonSpan = document.createElement("span");
  buttonSpan.textContent = char;

  const randomButtonFont = fonts[Math.floor(Math.random() * fonts.length)];
  buttonSpan.style.fontFamily = randomButtonFont;

  button.appendChild(buttonSpan);
});