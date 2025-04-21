const playButton = document.getElementById("playButton");
const music = document.getElementById("bgMusic");
let loveInterval = null;

playButton.addEventListener("click", () => {
  music.play();
  playButton.style.display = "none";

  // Mulai love jatuh hanya setelah musik diputar
  if (!loveInterval) {
    loveInterval = setInterval(createHeart, 300);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

