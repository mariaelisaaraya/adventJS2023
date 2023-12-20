function createChristmasTree(ornaments, height) {
  let tree = '';
  let pos = 0;

  for (let i = 0; i < height; i++) {
    tree += ' '.repeat(height - 1 - i);
    const row = [];

    for (let j = 0; j < i + 1; j++) {
      row.push(ornaments[pos % ornaments.length]);
      pos++;
    }

    tree += row.join(' ') + '\n';
  }

  tree += ' '.repeat(height - 1) + '|\n';

  return tree;
}