function distributeGifts(weights) {
    const result = [];
  
    for (let y = 0; y < weights.length; y++) {
      const topRow = weights[y - 1] || [];
      const bottomRow = weights[y + 1] || [];
      result[y] = [];
  
      for (let x = 0; x < weights[y].length; x++) {
        const w = weights[y][x];
        const top = topRow[x] || 0;
        const bottom = bottomRow[x] || 0;
        const left = weights[y][x - 1] || 0;
        const right = weights[y][x + 1] || 0;
  
        const divisor = !!w + !!top + !!bottom + !!left + !!right;
        const sumValues = w + top + bottom + left + right;
        const newValue = Math.round(sumValues / divisor);
  
        result[y][x] = newValue;
      }
    }
  
    return result;
  }