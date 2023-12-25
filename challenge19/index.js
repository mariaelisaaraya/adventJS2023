function revealSabotage(store) {
  let currentRow = null;
  let nextRow;

  for (const [i, row] of store.entries()) {
    nextRow = store[i + 1];

    for (const [b, cell] of row.entries()) {
      if (cell !== "*") {
        const calc =
          +(currentRow?.[b - 1] === "*") +
          +(currentRow?.[b] === "*") +
          +(currentRow?.[b + 1] === "*") +
          +(row?.[b - 1] === "*") +
          +(row?.[b + 1] === "*") +
          +(nextRow?.[b - 1] === "*") +
          +(nextRow?.[b] === "*") +
          +(nextRow?.[b + 1] === "*");

        if (calc > 0) {
          row[b] = calc.toString();
        }
      }
    }
    currentRow = row;
  }

  return store;
}
  