class List {
  lastItem;
  firstItem;
  length = 0;
  addToStart(elem) {
    this.length++;
    if (!this.firstItem) {
      this.firstItem = {
        elem: elem,
      };
      this.lastItem = this.firstItem;
    } else {
      const newCurrent = {
        elem: elem,
        next: this.firstItem,
      };
      this.firstItem.prev = newCurrent;
      this.firstItem = newCurrent;
    }
  }
  addToList(elem) {
    this.length++;
    if (!this.lastItem) {
      this.lastItem = {
        elem: elem,
      };
      this.firstItem = this.lastItem;
    } else {
      const newCurrent = {
        elem: elem,
        prev: this.lastItem,
      };
      this.lastItem.next = newCurrent;
      this.lastItem = newCurrent;
    }
  }
  countElems(item = this.lastItem, num = 0) {
    if (item) {
      num = num + 1;
    }
    if (item && item.prev) {
      return this.countElems(item.prev, num);
    }
    return num;
  }
  makeArr() {
    const array = [];
    const addToArr = (item = this.firstItem) => {
      if (item) {
        array.push(item.elem);
      }
      if (item && item.next) {
        addToArr(item.next);
      }
    };
    addToArr();

    return array;
  }
  max(item = this.firstItem, maxNum) {
    if (item && !maxNum) {
      maxNum = item.elem.he;
      console.log(item, "item");
    }

    if (maxNum < item.elem.he) {
      maxNum = item.elem.he;
      console.log("kkkkk", maxNum);
    }

    if (item && item.next) {
      return this.max(item.next, maxNum);
    }

    return maxNum;
  }

  forEach(callback) {
    this.makeArr().forEach(callback);
  }
  map(callback) {
    return this.makeArr().map(callback);
  }
  filter(callback) {
    return this.makeArr().filter(callback);
  }
  reduce(callback, first) {
    if (first) {
      return this.makeArr().reduce(callback, first);
    }
    return this.makeArr().reduce(callback);
  }
  find(callback) {
    return this.makeArr().find(callback);
  }
}
const list = new List();
list.addToList({ he: "2" });
list.addToList({ he: "9" });
list.addToList({ he: "5" });
list.addToList({ he: "2" });
list.addToList({ he: "4" });
list.addToStart({ he: "8" });
// console.log(list, "list");
console.log(list.max(), "list");
// console.log(list.makeArr());
// list.forEach((elem) => {
//   console.log(elem);
// });
// console.log(
//   list.map((elem) => {
//     elem.he = +elem.he;
//     return elem;
//   })
// );
// { he: 1 }
// { he: 2 }

// console.log(
//   list.reduce((acc, elem) => {
//     if (+acc.he > +elem.he) {
//       return acc;
//     }
//     return elem;
//   })
// );
