class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.length + 1;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let item of this.items) {
        sum += item;
      }
      return sum;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let average = this.sum() / this.items.length;
      return average;
    }
  }
}

module.exports = SortedList;
