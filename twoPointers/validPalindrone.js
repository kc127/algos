function isPalindrome(s) {
  if (s.length === 0) return true;
  s = s.toLowerCase();

  let left = 0;
  let right = s.length;
  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNum(s[right])) {
      right--;
    }
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

function isAlphaNum(ch) {
return (ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9");
}

console.log(isPalindrome(''), ' expect true');
console.log(isPalindrome('BAD'), ' expect false');
console.log(isPalindrome('DAD############'), ' expect true');
console.log(isPalindrome('Do geese see God?'), ' expect true');