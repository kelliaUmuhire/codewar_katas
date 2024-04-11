const dontGiveMeFive = (start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/g.test(i)) count++;
  }
  return count;
};

// const dontGiveMeFive = (start, end) => new Set(Array.from({length:end-start+1},(e,i)=>(i+start).toString().includes("5")?true:i+1)).size-1
