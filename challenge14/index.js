function maxGifts(houses) {
  const n = houses.length;

  if (n < 2) return n === 1 ? houses[0] : 0;

  const [first, second, ...rest] = houses;
  const dp = [first, Math.max(first, second)];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
  }

  return dp[n - 1];
}