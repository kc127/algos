function removeDuplicates(arr) {
  let slow = 0;
  let fast = 0;
  while (slow < arr.length && fast < arr.length) {
      if (arr[slow] === arr[fast]) {
          fast++;
      } else {
          slow++;
          arr[slow] = arr[fast];
      }
  }
  return slow + 1;
}