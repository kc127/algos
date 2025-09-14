/*
m1 = [1, 2, 2, 0, 0, 0]
              i

m2 = [3, 5, 6]
      j

*/
function mergeSortedArray(nums1, m, nums2, n) {

  let i = 0;
  let j = 0;

  while (i < m) {
    if (nums1[i] <= nums2[j]) {
      i++
    } else {
      let temp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = temp;
      i++;
    }
  }

  while (i < m + n && j < n) {
    nums1[i] = nums2[j];
    i++;
    j++
  }

  return nums1;

}
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], [2, 5, 6], ' expect [1, 2, 2, 3, 5, 6'));




