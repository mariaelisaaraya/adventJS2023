function adjustLights(lights) {
  let changesGreen = 0;
  let changesRed = 0;

  for (let i = 0; i < lights.length; i++) {
    const isGreen = lights[i] === '🟢';

    if ((i % 2 === 0 && !isGreen) || (i % 2 !== 0 && isGreen)) {
      changesGreen++;
    } else {
      changesRed++;
    }
  }

  return Math.min(changesGreen, changesRed);
}