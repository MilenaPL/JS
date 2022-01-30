function avg(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

avg([6, 7, 8]);
avg([5, 5, 5, 5, 5]);
