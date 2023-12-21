function revealSabotage(store) {
    const n = store.length;
    const m = store[0].length;
  
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        const ij = store[i][j];
        const w = +(store[i - 1]?.[j - 1] === '*') + +(store[i - 1]?.[j] === '*');
        const y = +(store[i - 1]?.[j + 1] === '*') + +(store[i]?.[j - 1] === '*');
        const t = +(store[i]?.[j + 1] === '*') + +(store[i + 1]?.[j - 1] === '*');
        const k = +(store[i + 1]?.[j] === '*') + +(store[i + 1]?.[j + 1] === '*');
        const x = `${w + y + t + k}`;
        store[i][j] = [ij, x][+(w + y + t + k > 0) * +(ij === ' ')];
      }
    }
  
    return store;
  }
  