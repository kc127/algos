function twoSumSorted(arr, target) {
  if (arr.length === 0) return [];

let left = 0;
let right = arr.length - 1;

while (left < arr.length && right >= 0) {
  let currSum = arr[left] + arr[right];
  if (currSum > target) {
    right--;
  } else if (currSum < target) {
    left++;
  } else if (currSum === target) {
    return [left, right];
  }
}
}