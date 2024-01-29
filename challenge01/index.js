function findFirstRepeated(gifts) {
  const seenGifts = new Set();

  for (const gift of gifts) {
    if (seenGifts.has(gift)) {
      return gift;
    }
    seenGifts.add(gift);
  }

  return -1;
}