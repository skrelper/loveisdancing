function roll() {
    var prompts = ["hissing like a snake",
  "apologizing for missing a birthday party",
  "talking in an Australian accent",
  "talking in a British accent",
  "listing as many restaurants as you can think of",
  "zipping your lips shut and trying to talk",
  "narrating what's happening outside of this room",
  "accepting a GRAMMY award for your latest album",
  "cackling like a witch",
  "spelling out supercalifragilisticexpialidocious",
  "laughing like SpongeBob",
  "listing 4 of your favorite foods",
  "beatboxing (throw some record scratches in there)",
  "performing a stand-up comedy set",
  "why did the chicken cross the road?",
  "repeating the same word over and over again",
  "pretending to be a news anchor reporting on a breaking news story",
  "yelling your fast food order",
  "giving yourself a pep talk before a big presentation",
  "singing whatever's stuck in your head",
  "asking a question you don't know the answer to",
  "talking gibberish",
  "auctioneering off an object in this room",
  "rhyming words with the word 'splat'",
  "onomatopoeiaing",
  "closing your eyes and describing what you see",
  "neighing like a horse",
  "telling your favorite dad joke",
  "describing your favorite toy as a kid",
  "narrating your morning routine",
  "how much wood could a woodchuck chuck if a woodchuck could chuck wood?",
  "revealing your deepest, darkest secret",
  "barking like a dog",
  "stating the alphabet backwards",
  "thinking out loud",
  "describing the plot of a movie you saaw recently",
  "hootin' an' hollerin'",
  "whistling to the best of your ability",
  "yeehawing like a cowboy",
  "making whale noises",
  "describing what you're wearing",
  "to recall a childhood memory",
  "yelling the first thing that comes to your mind",
  "creating the weirdest sounds possible",
  "making a sound and seeing where it takes you",
  "speaking in a different language (or a made up one)",
  "holding the highest note you can",
  "holding the lowest note you can",
  "meowing and purring like a cat",
  "talking about an interest of yours",
  "snapping a rhythm and humming to it",
  "describing your perfect day",
  "making a sound that represents your mood",
  "birdcalling",
  "giggling with more and more power",
  "laughing like a villain"];

  const display = document.getElementById("prompt");

  let flashes = 0;
  const maxflashes = 15;
  let delay = 2;

  display.classList.add("flash-effect");

  function flash() {
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    display.innerHTML = random;

    flashes++;
    if (flashes >= maxflashes) {
      const finalPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      display.innerHTML = finalPrompt;
      display.classList.remove("flash-effect");
    } else {
      delay += 10;
      setTimeout(flash, delay);
    }
  }

  flash();
}

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

const button = document.querySelector(".newprompt button");
const buttonText = button.textContent;
button.textContent = "";

[...buttonText].forEach(char => {
  const buttonSpan = document.createElement("span");
  buttonSpan.textContent = char;

  const randomButtonFont = fonts[Math.floor(Math.random() * fonts.length)];
  buttonSpan.style.fontFamily = randomButtonFont;

  button.appendChild(buttonSpan);
});

const p = document.querySelector("#try");
const pText = p.textContent;
p.textContent = "";

[...pText].forEach(char => {
  const pSpan = document.createElement("span");
  pSpan.textContent = char;

  const randomPFont = fonts[Math.floor(Math.random() * fonts.length)];
  pSpan.style.fontFamily = randomPFont;

  p.appendChild(pSpan);
});