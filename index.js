const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor () {
    const colors = [];
    for (let i = 0; i < 3; i++) {
        const randColor = getRandomNumber(0, 255);
        colors.push(randColor);
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

function drawCircle(posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(posX, posY, getRandomNumber(10, 50), 0, 2* Math.PI, true);
    ctx.fill();
}

function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

canvas.addEventListener('click', event => {
    const pos = getMousePos(canvas, event);
    drawCircle(pos.x, pos.y);
});
