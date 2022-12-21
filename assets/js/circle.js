function getRandomColor () {
    const colors = [];
    for (let i = 0; i < 3; i++) {
        const randColor = getRandomNumber(0, 255);
        colors.push(randColor);
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

function drawCircle(posX, posY, ctx) {
    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(posX, posY, getRandomNumber(10, 50), 0, 2* Math.PI, true);
    ctx.fill();
}
