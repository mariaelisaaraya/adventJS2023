function compile(code) {
    let counter = 0,
        returnPoint = -1;

    for (let i = 0; i < code.length; i++) {
        if (code[i] === "+") {
            counter++;
        } else if (code[i] === "*") {
            counter *= 2;
        } else if (code[i] === "-") {
            counter--;
        } else if (code[i] === "%") {
            returnPoint = i;
        } else if (code[i] === "<" && returnPoint !== -1) {
            i = returnPoint;
            returnPoint = -1;
        } else if (code[i] === "¿" && counter <= 0) {
            i = code.indexOf("?", i);
        }
    }

    return counter;
}
