function decode(message) {
    const stack = [];
    let result = '';
  
    for (let char of message) {
      if (char === '(') {
        stack.push(result);
        result = '';
      } else if (char === ')') {
        const reversed = result.split('').reverse().join('');
        result = stack.pop() + reversed;
      } else {
        result += char;
      }
    }
  
    return result;
  }