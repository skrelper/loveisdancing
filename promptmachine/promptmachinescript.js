function roll() {
    var prompts = ["try hissing like a snake",
  "try speaking like there's food in your mouth",
  "try apologizing for a past mistake",
  "try talking in an Australian accent",
  "try talking in a British accent",
  "try listing as many restaurants as you can think of",
  "try zipping your lips shut and trying to talk",
  "try narrating what's happening outside of this room",
  "try accepting a prestigious award",
  "try imitating someone",
  "try cackling like a witch",
  "try spelling out supercalifragilisticexpialidocious",
  "try speaking in a monotone voice",
  "try making the sounds of your favorite animal",
  "try laughing like SpongeBob",
  "try listing 5 of your favorite foods",
  "try beatboxing (throw some record scratches in there)",
  "try whispering your thoughts",
  "try dropping some knowledge",
  "try performing a stand-up comedy set",
  "try repeating the same word over and over again",
  "try pretending to be a news anchor reporting on a breaking news story",
  "try yelling your fast food order",
  "try giving yourself a pep talk before a big presentation",
  "try listening to the sounds around you and describing them",
  "try singing the last song you heard",
  "try asking a question you don't know the answer to",
  "try talking gibberish",
  "try auctioneering off an object in your bedroom",
  "try listing as many words as you can that rhyme with your name",
  "try listing onomatopoeias",
  "try closing your eyes and describing what you see",
  "try neighing like a horse",
  "try speaking your truth",
  "try telling a dad joke",
  "try calling out your enemy",
  "try talking about a time you felt joy",
  "try describing your favorite toy as a kid",
  "try narrating your morning routine",
  "try a tongue twister",
  "try revealing your deepest, darkest secret",
  "try barking like a dog",
  "try stating the alphabet backwards",
  "try to count your brain cells",
  "try thinking out loud",
  "try describing the plot of the last movie you saw",
  "try coming up with a cheerleader chant",
  "try hootin' an' hollerin'",
  "try whistling to the best of your ability",
  "try making whale noises",
  "try describing what you're wearing",
  "try describing what you sound like",
  "try to recall a childhood memory",
  "try yelling the first thing that comes to your mind",
  "try creating the weirdest sounds possible",
  "try making a sound and seeing where it takes you",
  "try speaking in a different language (or a made up one)",
  "try holding the highest note you can",
  "try holding the lowest note you can",
  "try being as annoying as possible",
  "try meowing and purring like a cat",
  "try talking about an interest of yours",
  "try listing a few of your favorite things",
  "try snapping a rhythm and humming to it",
  "try describing your favorite place in the world",
  "try complaining about something on your mind",
  "try making a sound that represents your mood",
  "try birdcalling",
  "try giggling with more and more power",
  "try laughing like a villain",
  "try laughing while talking about laughing"];

  var prompt = prompts[Math.floor(Math.random() * prompts.length)];

  document.getElementById("prompt").innerHTML = prompt;
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
  const text = button.textContent;
  button.textContent = ""; // Clear original text

  [...text].forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;

    // Pick a random font
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    span.style.fontFamily = randomFont;

    button.appendChild(span);
  });