const secondLabel = document.createElement("p");
secondLabel.textContent = "s";
const container = document.querySelector(".chrono");
container.classList.add("grow");

let t = 0;
let intervalID;

container.appendChild(secondLabel)


const updateDisplay = () => {
    container.textContent = t + "s";
}

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

start.addEventListener("click", function(e) {
    intervalID = setInterval(() => {
        t++;
        updateDisplay();
    }, 1000);
})


stop.addEventListener("click", (e) => {
    clearInterval(intervalID);
})

reset.addEventListener("click", (e) => {
    clearInterval(intervalID);
    t = 0;
    updateDisplay();
})



