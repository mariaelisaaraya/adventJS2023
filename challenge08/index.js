function organizeGifts(gifts) {
    const countGifts = gifts.match(/\d+/g);
    const nameGifts = gifts.match(/[^0-9]/g);
  
    if (!countGifts || !nameGifts) {
      return '';
    }
  
    let result = '';
  
    for (let i = 0; i < countGifts.length; i++) {
      let c = +countGifts[i];
      const g = nameGifts[i];
  
      result += `[${g}]`.repeat(Math.floor(c / 50));
      c %= 50;
  
      result += `{${g}}`.repeat(Math.floor(c / 10));
      c %= 10;
  
      result += `(${g.repeat(c)})`.repeat(+!!c);
    }
  
    return result;
  }