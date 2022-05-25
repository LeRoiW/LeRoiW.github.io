let n = 5;
let res = [
  //   [5, 7, 9],
  //   [6, 1, 3],
  //   [4, 2, 8],
  [5, 2, 6],
  [5, 7, 9],
  [1, 4, 5],
  [4, 2, 8],
  [5, 0, 1],
];

console.log(minSum(n, res, 4));

function minSum(n, res, index) {
  let sum = Infinity;
  let count = 0;
  let outindex = 4;
  let outRes = [];
  //   第一个行的所有情况
  if (res.length > 1) {
    for (let i = 1; i < n; i++) {
      outRes.push(res[i]);
    }
    for (let i = 0; i < 3; i++) {
      if (i != index) {
        outindex = i;
        count = res[0][i] + minSum(n - 1, outRes, outindex);
        sum = Math.min(sum, count);
      }
    }
  } else {
    let min = Infinity;
    for (let i = 0; i < 3; i++) {
      if (i != index && res[0][i] < min) {
        min = res[0][i];
        sum = min;
      }
    }
  }
  return sum;
}
