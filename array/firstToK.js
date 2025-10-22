function firstToK (arr, k) {
  let freqObj = {};

  for (let num of arr) {
    if (!arr[num]) {
      freqObj[num] = 1;
    } else {
      freqObj[num]++;
    }

    if (freqObj[num] === k) {
      return num;
    }
  }

  return -1;
}

let arr1 = [9, 5, 6, 1, 2,2, 3, 3, 3]
let arr2 = []
let arr3 = [56,89,69,56,96,89]
let arr4 = [1,2,3,4,5]
let arr5 = [2, 2, 2]
let arr6 = [2, 2, 2,4,4] // k = 2


console.log(firstToK(arr1, 3), ' expect 3');
console.log(firstToK(arr2, 2), ' expect -1');
console.log(firstToK(arr3, 2), ' expect 56');
console.log(firstToK(arr4, 2), ' expect -1');
console.log(firstToK(arr5, 2), ' expect 2');