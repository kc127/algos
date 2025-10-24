function twoSum (input, target) {
  let pairs = {};

  for (let i = 0; i < input.length; i++) {
    let sum = target - input[i];
    if (pairs[sum] !== undefined) {
      return [pairs[sum], i];
    } else {
      pairs[input[i]] = i;
    }
  }
}

function twoSumSortedOriginal (input, target) {
  let i = 0;
  let j = input.length - 1;
  while (i < j) {
    let currSum = input[i] + input[j];
    if (currSum === target) {
      return [i, j];
    } else if (currSum < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
}
/*

             r
-4 -1 -1 0 1 2
    f
       l

-4 + -1 + 1 = -2

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (input) {
  input = input.sort((a, b) => (a - b));

  let triplets = [];
  for (let firstIndex = 0; firstIndex < input.length; firstIndex++) {
    if (firstIndex > 0 && input[firstIndex] === input[firstIndex-1]) {
      continue;
    }

    let leftPointer = firstIndex + 1;
    let rightPointer = input.length - 1;
    while (leftPointer < rightPointer) {
      let sum = input[firstIndex] + input[leftPointer] + input[rightPointer];

      if (sum < 0) {
        leftPointer++;

      } else if (sum > 0) {
        rightPointer--;

      } else if (sum === 0) {
    triplets.push([input[firstIndex], input[leftPointer++], input[rightPointer--]]);

        while (leftPointer < rightPointer && input[rightPointer] === input[rightPointer + 1]) {
          rightPointer--;
        }
      }
    }
  }
  return triplets;
}

// console.log(twoSum([2, 3, 6], 5), ' expect [0,1]');
// console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8), ' expect [1, 3]');
console.log(threeSum([-8, -5, -5, 4, 4, 8, 11], 8), ' expect [0, 3, 4]');