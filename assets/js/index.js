const canvas = document.getElementById('canvas');

canvas.addEventListener('click', event => {
    const pos = utils.getMousePos(event);
    const ctx = canvas.getContext("2d");
    circle.draw(pos.x, pos.y, ctx);
});
