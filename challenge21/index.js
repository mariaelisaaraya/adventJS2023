function findBalancedSegment(message) {
    let maxLength = 0;
    let balancedSegmentIndices = [];
  
    for (let start = 0; start < message.length; start++) {
      let zerosCount = 0;
      let onesCount = 0;
  
      for (let end = start; end < message.length; end++) {
        if (message[end] === 0) {
          zerosCount++;
        } else {
          onesCount++;
        }
  
        if (zerosCount === onesCount && end - start + 1 > maxLength) {
          maxLength = end - start + 1;
          balancedSegmentIndices = [start, end];
        }
      }
    }
  
    return balancedSegmentIndices;
  }