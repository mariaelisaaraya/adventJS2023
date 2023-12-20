function autonomousDrive(store, movements) {
    let initialPositionX = 0;
    let initialPositionY = store.findIndex((row) => {
        initialPositionX = row.indexOf("!");
        return initialPositionX !== -1;
    });

    store[initialPositionY] = store[initialPositionY].replace("!", ".");

    let currentX = initialPositionX;
    let currentY = initialPositionY;

    const isValidMove = (x, y) => store[y]?.[x] !== "*" && store[y]?.[x] !== undefined;

    for (const movement of movements) {
        const move = { R: [1, 0], L: [-1, 0], U: [0, -1], D: [0, 1] }[movement];
        const [dx, dy] = move;

        const nextX = currentX + dx;
        const nextY = currentY + dy;

        if (isValidMove(nextX, nextY)) {
        currentX = nextX;
        currentY = nextY;
        }
    }

    store[currentY] = store[currentY].slice(0, currentX) + "!" + store[currentY].slice(currentX + 1);

    return store;
}