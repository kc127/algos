function isValid (s) {
  let openingBrackets = [];
  let pairs = {
    '}':'{',
    ')':'(',
    ']':'['
  };

  for (let char of s) {
    let top = openingBrackets[openingBrackets.length - 1];
    if (pairs[char] && pairs[char] === top) {
      openingBrackets.pop();
    } else {
      openingBrackets.push(char);
    }
  }
  return openingBrackets.length === 0;
}

console.log(isValid('()'), ' expect true');
console.log(isValid('('), ' expect false');
console.log(isValid('{{[()]}}'), ' expect true');
console.log(isValid('{{[()]}}]'), ' expect false');