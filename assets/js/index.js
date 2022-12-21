const canvas = document.getElementById('canvas');

canvas.addEventListener('click', event => {
    const pos = getMousePos(event);
    const ctx = canvas.getContext("2d");
    drawCircle(pos.x, pos.y, ctx);
});
