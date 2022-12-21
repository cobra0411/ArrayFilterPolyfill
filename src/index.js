// Array.filter polyfill
Array.prototype.filter2 = function (callback) {
  let result = [];
  this.forEach((item) => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
};

let tempArr = [1, 2, 3, 4, 5, 6];
console.log(tempArr.filter2((item) => item % 2));
