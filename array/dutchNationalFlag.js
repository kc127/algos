function dnf (arr) {
  let zeroIndex = 0;
  let twoIndex = arr.length - 1;
  let currIndex = 0;

  while (currIndex <= twoIndex) {
    if (arr[currIndex] === 0) {
      [arr[currIndex], arr[zeroIndex]] = [arr[zeroIndex], arr[currIndex]];
      currIndex++;
      zeroIndex++;
    } else if (arr[currIndex] === 1) {
      currIndex++;
    } else if (arr[currIndex] === 2) {
      [arr[currIndex], arr[twoIndex]] = [arr[twoIndex], arr[currIndex]];
      twoIndex--;
    }
  }
}