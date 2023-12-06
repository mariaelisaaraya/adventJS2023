 function decode(message) {
    const stack = [];
    let currentString = '';
  
    for (let char of message) {
      if (char === '(') {
        stack.push(currentString);
        currentString = '';
      } else if (char === ')') {
        const reversed = currentString.split('').reverse().join('');
        currentString = stack.pop() + reversed;
      } else {
        currentString += char;
      }
    }
  
    return currentString;
  }