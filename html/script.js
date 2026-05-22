function moveNoButton() {
    const button = document.querySelector(".no-btn");
    const wrapper = document.querySelector(".wrapper");

    const maxX = wrapper.clientWidth - button.offsetWidth;
    const maxY = wrapper.clientHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function sayYes() {
    document.querySelector(".question").innerText = "Yesss 😍 I’ll pick the place!";

    document.getElementById("gif").src =
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXVlNnA2Y2hycWs1MGZkcGoxNHZ2YmkzNjR1d3p4cnFmMzd1Z2xwZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lNM3XycFWGTdCahmcl/giphy.gif";

    document.querySelector(".btn-group").style.display = "none";

    for (let i = 0; i < 150; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor = getRandomColor();

    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(confetti);

    let velocityX = (Math.random() - 0.5) * 5;
    let velocityY = (Math.random() - 0.5) * 5;

    let life = 0;

    let move = setInterval(() => {
        let top = parseFloat(confetti.style.top);
        let left = parseFloat(confetti.style.left);

        confetti.style.top = top + velocityY + "px";
        confetti.style.left = left + velocityX + "px";

        life++;

        if (life > 100) {
            clearInterval(move);
            confetti.remove();
        }
    }, 20);
}

function getRandomColor() {
    const colors = ["#ff4d4d", "#ffd700", "#4caf50", "#00ccff", "#ff66cc"];
    return colors[Math.floor(Math.random() * colors.length)];
}