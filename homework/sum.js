const sum = (arr) => {
  let first = arr[0];

  if (arr.length <= 0) return 0;
  arr.shift();

  return first + sum(arr);
};

console.log(sum([2, 4, 6]), "here"); //12
