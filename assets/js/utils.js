const utils = (() => {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const getMousePos = (event) => {
        const rect = event.target.getBoundingClientRect();
        return {
            x: event.clientX - rect.left - 20, // need to substract canvas border
            y: event.clientY - rect.top - 20
        };
    }

    return {
        getRandomNumber,
        getMousePos
    };
})();
