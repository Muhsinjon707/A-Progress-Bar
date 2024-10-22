let CircularBar = document.querySelector(".circular-bar");
let PercentValue = document.querySelector(".percent");

let InitialValue = 0;
let finalValue = 70;
let speed = 10;

let timer = setInterval(() => {
    InitialValue += 1;

    CircularBar.style.background = ` conic-gradient(#4286f4 ${InitialValue/100 * 360}deg, #e8f0f7 0deg)`;

    if (InitialValue >=finalValue) {
        clearInterval(timer);
    }

}, speed)