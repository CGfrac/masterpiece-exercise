function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getMousePos(event) {
    const rect = event.target.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
