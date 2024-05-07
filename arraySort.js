// Fix the sort() method for arrays here.

Array.prototype.sort = function () {
  for (let i = 0; i < this.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let min = this[minIndex];
      this[minIndex] = this[i];
      this[i] = min;
    }
  }

  return this;
};
