function findNaughtyStep(original, modified) {
    if (original === modified) return "";
  
    let index = 0;
    while (original[index] === modified[index++]);
  
    return (original.length > modified.length ? original : modified)[index - 1];
  }
  