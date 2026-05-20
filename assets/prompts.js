function roll() {
    var prompts = ["hissing like a snake",
  "elongating an Australian accent",
  "zipping your lips shut and pretending to be a zipper",
  "cackling like a witch",
  "spelling out supercalifragilisticexpialidocious",
  "laughing like SpongeBob",
  "beatboxing",
  "making rattlesnake noises with your tongue",
  "elongating the vowels as much as possible (a, e, i, o, u, and sometimes y)",
  "repeating the same word over and over again",
  "singing a song",
  "recreating minecraft mob noises from memory",
  "humming the first song that comes to your mind",
  "pretending to be a robot and making robotic noises",
  "pretending to be a monster and making monster noises",
  "pretending you lost your voice but you need to say something really important",
  "talking gibberish",
  "saying toy boat 10 times fast",
  "repeating one word and making it sound like a different word each time",
  "repeating the same word over and over again but really really fast",
  "loudly whispering a fun fact about yourself",
  "onomatopoeiaing",
  "neighing like a horse",
  "pretending your food is really hot and you need to blow on it to cool it down",
  "pretending there's a fire and you can only use your mouth to put it out",
  "how much wood could a woodchuck chuck if a woodchuck could chuck wood? x10",
  "slowly listing facts about yourself without your lips touching",
  "barking and howling like a dog",
  "squeaking like a mouse that realllyyy wants some cheese",
  "chirping like an excited dolphin",
  "chirping and squirping like a bird that is just so happy to be alive",
  "pretending to be a ghost and making spooky noises",
  "reciting the alphabet backwards",
  "holding a note for as long as you can",
  "slowwwwwllyyyyy whispering this prompt out loud",
  "replicating the sounds of record scratches",
  "dramatically whispering about what you did today",
  "replicating the sound of sizzling meat",
  "speaking in falsetto",
  "reciting the alphabet",
  "hootin' an' hollerin'",
  "climbing a solfege scale (do, re, mi, fa, sol, la, ti, do)",
  "pretending you're in a cave and making echoing noises",
  "creating your own drum sounds with your mouth",
  "whistling to the best of your ability",
  "yeehawing like a cowboy",
  "making whale noises",
  "pretending you're a noise machine and making as many different noises as you can",
  "pretending you're a car and making engine noises",
  "pretending you're a spaceship and making space noises",
  "yelling the first thing that comes to your mind (keep it clean please)",
  "creating the weirdest sounds possible",
  "making sounds that represents your personality",
  "pretending you're eating noodles and making slurping noises",
  "pretending you're eating a really crunchy food and making crunching noises",
  "holding the highest note you can",
  "holding the lowest note you can",
  "meowing and purring like a cat",
  "snapping a rhythm and humming to it",
  "recreating wind noises as loud as you can",
  "replicating the sounds of a tornado",
  "sounding out your name in the most dramatic way possible",
  "making a sound that represents your mood",
  "birdcalling",
  "giggling with more and more power",
  "she sells seashells by the seashore! x10",
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