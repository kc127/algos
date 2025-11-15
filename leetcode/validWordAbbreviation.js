/*
A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (no substrings replaced)
The following are not valid abbreviations:

"s55n"  (s hhhhh hhhh n)
"s010n" (has leading zeros)
"s0ubstitution" (replaces an empty substring)


Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

A substring is a contiguous non-empty sequence of characters within a string.

Example 0:
word = "substitution", abbr = "s55n"

Example 1:
word = "internationalization", abbr = "i12iz4n" , length = 1 + 12 + 2 + 4 + 1 = 20 chars

approach:
  check if the word length and abbr length is equal
    - check if the abbr is valid:
    i) no leading 0



    internationalization
    i12iz4n
       ^

    12

  abbrLen = 6
  helloworld h44d



*/
var validWordAbbreviation = function(word, abbr) {
  let abbrLen = 0;
  let num = [];
  for (let i = 0; i < abbr.length; i++) {
    if (isAlpha(abbr[i])) {
      if (num.length !== 0) {
        abbrLen += parseInt(num.join(''));
        num = [];
      }
      if (word[abbrLen] !== abbr[i]) {
        return false;
      }
      abbrLen++;
    } else {
      if (abbr[i] === '0' && num.length === 0) {
        return false;
      }
      num.push(abbr[i])
    }
  }
  if (num.length !== 0) {
    abbrLen += parseInt(num.join(''));
  }
  return word.length === abbrLen;
};


function isAlpha(char) {
  return /^[A-Za-z]$/.test(char);
}

// console.log(validWordAbbreviation('helloworld','h5brld'), ' expect false');
// console.log(validWordAbbreviation('b','h'), ' expect false');
// console.log(validWordAbbreviation('b','0'), ' expect false');
// console.log(validWordAbbreviation('helloworld','h5orld'), ' expect true');
// console.log(validWordAbbreviation('substitution', 's10n'), ' expect true');
console.log(validWordAbbreviation('internationalization', 'i5a11o1'), ' expect true');

