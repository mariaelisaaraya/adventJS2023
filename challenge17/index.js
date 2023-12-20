function optimizeIntervals(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const optimizedIntervals = [sortedIntervals[0]];
  
    for (let i = 1; i < sortedIntervals.length; i++) {
      const currentInterval = sortedIntervals[i];
      const lastOptimizedInterval =
        optimizedIntervals[optimizedIntervals.length - 1];
  
      if (currentInterval[0] <= lastOptimizedInterval[1]) {
        lastOptimizedInterval[1] = Math.max(
          currentInterval[1],
          lastOptimizedInterval[1]
        );
      } else {
        optimizedIntervals.push(currentInterval);
      }
    }
  
    return optimizedIntervals;
}