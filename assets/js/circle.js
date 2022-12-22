const circle = (() => {
    const _getRandomColor = () => {
        const colors = [];
        for (let i = 0; i < 3; i++) {
            const randColor = utils.getRandomNumber(0, 255);
            colors.push(randColor);
        }
        return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    };

    const draw = (posX, posY, ctx) => {
        ctx.beginPath();
        ctx.fillStyle = _getRandomColor();

        const radius = utils.getRandomNumber(10, 50);

        ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        ctx.fill();
    };

    return { draw };
})();
