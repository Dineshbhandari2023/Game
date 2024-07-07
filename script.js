// const msg = document.querySelector(".msg");
// const guess = document.querySelector("input");
// const btn = document.querySelector(".btn");

// let play = false;
// let newWords = "";
// let randomWords = "";
// let wordList = [
//   "able",
//   "about",
//   "absolute",
//   "accept",
//   "account",
//   "achieve",
//   "across",
//   "active",
//   "actual",
//   "address",
//   "admit",
//   "advertise",
//   "affect",
//   "afford",
//   "after",
//   "afternoon",
//   "again",
//   "against",
//   "agent",
//   "agree",
//   "allow",
//   "almost",
//   "already",
//   "although",
//   "always",
//   "amount",
//   "analysis",
//   "announce",
//   "annual",
//   "another",
//   "answer",
//   "anxiety",
//   "anybody",
//   "appear",
//   "apply",
//   "appoint",
//   "approach",
//   "appropriate",
//   "argue",
//   "arise",
//   "arrange",
//   "arrival",
//   "article",
//   "assess",
//   "assign",
//   "assist",
//   "assume",
//   "atmosphere",
//   "attempt",
//   "attend",
//   "attention",
//   "attitude",
//   "attract",
//   "audience",
//   "available",
//   "average",
//   "award",
//   "aware",
//   "away",
// ];

// // function to generate the random scramble word from word list
// const createRandomWord = () => {
//   let ranNum = Math.floor(Math.random() * wordList.length);
//   let newTempWords = wordList[ranNum];
//   //   console.log(newTempWords);
//   return newTempWords;
// };

// const scrambleWords = (arr) => {
//   let shuffledArray = arr.slice();
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// btn.addEventListener("click", () => {
//   if (!play) {
//     play = true;
//     btn.innerHTML = "Guess";
//     guess.classList.toggle("hidden");
//     newWords = createRandomWord();
//     randomWords = scrambleWords(newWords.split(""));
//     console.log(randomWords.join(" "));
//   }
// });

const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let play = false;
let newWords = "";
let randomWords = "";
let wordList = [
  "able",
  "about",
  "absolute",
  "accept",
  "account",
  "achieve",
  "across",
  "active",
  "actual",
  "address",
  "admit",
  "advertise",
  "affect",
  "afford",
  "after",
  "afternoon",
  "again",
  "against",
  "agent",
  "agree",
  "allow",
  "almost",
  "already",
  "although",
  "always",
  "amount",
  "analysis",
  "announce",
  "annual",
  "another",
  "answer",
  "anxiety",
  "anybody",
  "appear",
  "apply",
  "appoint",
  "approach",
  "appropriate",
  "argue",
  "arise",
  "arrange",
  "arrival",
  "article",
  "assess",
  "assign",
  "assist",
  "assume",
  "atmosphere",
  "attempt",
  "attend",
  "attention",
  "attitude",
  "attract",
  "audience",
  "available",
  "average",
  "award",
  "aware",
  "away",
];

// function to generate the random scramble word from word list
const createRandomWord = () => {
  let ranNum = Math.floor(Math.random() * wordList.length);
  let newTempWords = wordList[ranNum];
  //   console.log(newTempWords);
  return newTempWords;
};

const scrambleWords = (arr) => {
  let shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.join("");
};

btn.addEventListener("click", () => {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createRandomWord();
    randomWords = scrambleWords(newWords.split(""));
    msg.innerHTML = `Guess the word: ${randomWords}`;
    console.log(randomWords);
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      play = false;
      msg.innerHTML = `Awesome! It's correct. The word was ${newWords}.`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      msg.innerHTML = `Sorry, it's incorrect. Try again: ${randomWords}`;
    }
  }
});
