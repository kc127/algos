/* my solution O(n) time & space */
function minRemoveToMakeValid (str) {
  let open = 0;
  let strArray = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(') {
      open++
    } else if (char === ')' && open === 0) {
      continue;
    } else if (char === ')') {
      open--;
    }
    strArray.push(char);
  }
  if (open === 0) return strArray.join('');

  let close = 0;
  let rightToLeft = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    let char = strArray[i];
    if (char === ')') {
      close++;
    } else if (char === '(' && close === 0) {
      continue;
    } else if (char === '(') {
      close--;
    }
    rightToLeft.push(char);
  }
  return rightToLeft.reverse().join('');
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"), ' expect "lee(t(c)o)de"');
console.log(minRemoveToMakeValid("(lee(t(c)o)de"), ' expect "lee(t(c)o)de"');