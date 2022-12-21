const utils = (() => {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const getMousePos = (event) => {
        const rect = event.target.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    return {
        getRandomNumber,
        getMousePos
    };
})();
