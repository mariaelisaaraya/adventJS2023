function maxDistance(movements) {
    let right = (movements.match(/>/g) || []).length;
    let left = (movements.match(/</g) || []).length;
    let extra = movements.length - (right + left);
  
    let distance = right - left;
  
    return Math.abs(distance) + extra;
  }