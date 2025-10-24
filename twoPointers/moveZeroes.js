function moveZeroes(arr) {
  let slow = 0;
  let fast = 0;
  while (fast < arr.length) {
    if (arr[fast] === 0) {
      if (arr[slow] !== 0) {
        slow = fast;
      }
      fast++;
    } else {
      let temp = arr[slow];
      arr[slow] = arr[fast];
      arr[fast] = temp;
      slow++;
      fast++;
    }
  }
  return arr;
}