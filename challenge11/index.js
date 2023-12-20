function getIndexsForPalindrome(word) {
  const isPalindrome = (str) => str === str.split('').reverse().join('');

  if (isPalindrome(word)) {
    return [];
  }

  for (let a = 0; a < word.length; a++) {
    for (let b = 0; b < word.length; b++) {

      let swapped = [...word];
      let aux = swapped[a];
      swapped[a] = swapped[b];
      swapped[b] = aux;


      let left = swapped.slice(0, Math.floor(word.length / 2)).join("");
      let right = swapped
        .slice(Math.ceil(word.length / 2))
        .reverse()
        .join("");

      if (left == right) {
        if (a == b) {
          return [];
        }
        return [a, b];
      }
    }
  }

  return null;
}