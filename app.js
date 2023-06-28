const compchoicedisplay = document.getElementById("comp-choice");
const yourchoicedisplay = document.getElementById("user-choice");
const Resultdisplay = document.getElementById("result");
const possiblechoice = document.querySelectorAll("button");

let userchoice;
let computerchoice;

possiblechoice.forEach((possiblechoice) =>
  possiblechoice.addEventListener("click", (e) => {
    userchoice = e.target.id;
    yourchoicedisplay.innerHTML = userchoice;

    choicegen();
    getresult();
  })
);

function choicegen() {
  const generator = Math.floor(Math.random() * 3);

  if (generator === 0) {
    computerchoice = "Rock";
  }
  if (generator === 1) {
    computerchoice = "Scissor";
  }
  if (generator === 2) {
    computerchoice = "Paper";
  }

  compchoicedisplay.innerHTML = computerchoice;
};

function getresult() {
  if (computerchoice === userchoice) {
    result = "Its a draw";
  }
  if (computerchoice === "Rock" && userchoice === "Paper") {
    result = "You win";
  }
  if (computerchoice === "Paper" && userchoice === "Rock") {
    result = "You lose";
  }
  if (computerchoice === "Paper" && userchoice === "Scissor") {
    result = "You win";
  }
  if (computerchoice === "Scissor" && userchoice === "Paper") {
    result = "You lose";
  }
  if (computerchoice === "Scissor" && userchoice === "Rock") {
    result = "You win";
  }
  if (computerchoice === "Rock" && userchoice === "Scissor") {
    result = "You lose";
  }
  Resultdisplay.innerHTML = result;
};
