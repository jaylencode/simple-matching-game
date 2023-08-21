const game = document.querySelector(".game");

// Array
const emojis = [
  "😊",
  "😊",
  "🥹",
  "🥹",
  "😄",
  "😄",
  "😍",
  "😍",
  "😋",
  "😋",
  "🤓",
  "🤓",
  "😇",
  "😇",
  "🤩",
  "🤩",
];

// sorting the emojis by random
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  // Creating a Div.
  let box = document.createElement("div");

  // Giving Box a class name.
  box.className = "item";

  // Setting the Box Div to equal the 1st index of the Array.
  box.innerHTML = shuffleEmojis[i];

  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ===
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length === emojis.length) {
            alert("win");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  game.appendChild(box);
}
