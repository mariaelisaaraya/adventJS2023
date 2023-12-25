function findBalancedSegment(message) {
    let idxSegment = [];
    let maxZeros = 0;
    let maxOnes = 0;

    for (let i = 0; i < message.length - 1; i++) {
        let zeros = 0;
        let ones = 0;

        for (let j = i; j < message.length; j++) {
        message[j] === 0 ? zeros++ : ones++;

        if (zeros === ones && zeros > maxZeros && ones > maxOnes) {
            idxSegment = [i, j];
            maxZeros = zeros;
            maxOnes = ones;
        }
        }
    }

    return maxZeros > 0 ? idxSegment : [];
}